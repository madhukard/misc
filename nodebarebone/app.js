(function() {
	"use strict";

	var nconf = require('nconf'),
		fs = require('fs'),
		winston = require('winston'),
		path = require('path'),
		pkg = require('./package.json'),
		utils = require('./public/src/utils.js'),
		meta;

	nconf.argv().env();

	// Runtime environment
	global.env = process.env.NODE_ENV || 'production';

	winston.remove(winston.transports.Console);
	winston.add(winston.transports.Console, {
		colorize: true
	});

	winston.add(winston.transports.File, {
		filename: 'error.log',
		level: 'error'
	});

	// TODO: remove once https://github.com/flatiron/winston/issues/280 is fixed
	winston.err = function (err) {
		winston.error(err.stack);
	};


	if (!nconf.get('help') && !nconf.get('setup') && !nconf.get('install') && !nconf.get('upgrade') && fs.existsSync(__dirname + '/config.json')) {
		// Load server-side configs
		nconf.file({
			file: __dirname + '/config.json'
		});
		meta = require('./src/meta');

		nconf.set('url', nconf.get('base_url') + (nconf.get('use_port') ? ':' + nconf.get('port') : '') + nconf.get('relative_path'));
		nconf.set('upload_url', path.join(path.sep, nconf.get('relative_path'), 'uploads', path.sep));
		nconf.set('base_dir', __dirname);

		winston.info('Time: ' + new Date());
		winston.info('Initializing Node Application v' + pkg.version + ', on port ' + nconf.get('port') + ', using ' + nconf.get('database') +' store at ' + nconf.get(nconf.get('database') + ':host') + ':' + nconf.get(nconf.get('database') + ':port') + '.');
		winston.info('Node Application instance bound to: ' + ((nconf.get('bind_address') === "0.0.0.0" || !nconf.get('bind_address')) ? 'Any address (0.0.0.0)' : nconf.get('bind_address')));

		if (process.env.NODE_ENV === 'development') {
			winston.info('Base Configuration OK.');
		}

		require('./src/database').init(function(err) {
			meta.configs.init(function () {

				var templates = require('./public/src/templates'),
					translator = require('./public/src/translator'),
					webserver = require('./src/webserver'),
					plugins = require('./src/plugins');

				templates.setGlobal('relative_path', nconf.get('relative_path'));

				
				//upgrade.check(function(schema_ok) {
				//	if (schema_ok || nconf.get('check-schema') === false) {
						plugins.init();

						translator.loadServer();

						var customTemplates = meta.config['theme:templates'] ? path.join(__dirname, 'node_modules', meta.config['theme:id'], meta.config['theme:templates']) : false;

						utils.walk(path.join(__dirname, 'public/templates'), function (err, tplsToLoad) {
							templates.init(tplsToLoad, customTemplates);
						});

						plugins.ready(function() {
							templates.ready(webserver.init);
						});

						//notifications.init();
				/*	} else {
						winston.warn('Your schema is out-of-date. Please run the following command to bring your dataset up to spec:');
						winston.warn('    node app --upgrade');
						winston.warn('To ignore this error (not recommended):');
						winston.warn('    node app --no-check-schema')
						process.exit();
					}
				}); */
			});
		});
	} else if (nconf.get('setup') || nconf.get('install') || !fs.existsSync(__dirname + '/config.json')) {
		// New install, ask setup questions
		if (nconf.get('setup')) {
			winston.info('Setup Triggered via Command Line');
		} else {
			winston.warn('Configuration not found, starting setup');
		}
		
		nconf.file({
			file: __dirname + '/config.json'
		});

		var templates = require('./public/src/templates'),
			install = require('./src/install');

		winston.info('Welcome!');
		winston.info('This looks like a new installation, so you\'ll have to answer a few questions about your environment before we can proceed.');
		winston.info('Press enter to accept the default setting (shown in brackets).');

		install.setup(function (err) {
			if (err) {
				winston.error('There was a problem completing setup: ', err.message);
			} else {
				winston.info('Setup Completed. Run \'./nodebb start\' to manually start your server.');
			}

			process.exit();
		});
	} else if (nconf.get('upgrade')) {

	} else {
		winston.info('Usage: node app [options] [arguments]');
		winston.info('       [NODE_ENV=development | NODE_ENV=production] node app [--start] [arguments]');
		winston.info('');
		winston.info('Options:');
		winston.info('  --help              displays this usage information');
		winston.info('  --setup             configure your environment and setup');
		winston.info('  --upgrade           upgrade');
		winston.info('  --start             manually start NodeBB (default when no options are given)');		
	}

})();
