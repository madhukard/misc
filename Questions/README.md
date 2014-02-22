#Front-end Job Interview Questions

This repo contains a number of front-end interview questions that can be used when vetting potential candidates. It is by no means recommended to use every single question here on the same candidate (that would take hours). Choosing a few items from this list should help you vet the intended skills you require.

[Rebecca Murphey](http://rmurphey.com/)'s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) is also a great resource to read up on before you head into an interview.

**Note:** Keep in mind that many of these questions are open ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would.

## <a name='toc'>Table of Contents</a>

  1. [Original Contributors](#contributors)
  1. [General Questions](#general)
  1. [HTML Questions](#html)
  1. [CSS Questions](#css)
  1. [JS Questions](#js)
  1. [jQuery Questions](#jquery)
  1. [Coding Questions](#jscode)
  1. [Fun Questions](#fun)
  1. [Other Great References](#references)

####[[⬆]](#toc) <a name='contributors'>Original Contributors:</a>

The majority of the questions were plucked from an [oksoclap](http://oksoclap.com/) thread created originally by [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) and contributed to by the following individuals:

* [@bentruyman](http://twitter.com/bentruyman) - http://bentruyman.com
* [@cowboy](http://twitter.com/cowboy) - http://benalman.com
* [@ajpiano](http://ajpiano) - http://ajpiano.com
* [@SlexAxton](http://twitter.com/slexaxton) - http://alexsexton.com
* [@boazsender](http://twitter.com/boazsender) - http://boazsender.com
* [@miketaylr](http://twitter.com/miketaylr) - http://miketaylr.com
* [@vladikoff](http://twitter.com/vladikoff) - http://vladfilippov.com
* [@gf3](http://twitter.com/gf3) - http://gf3.ca
* [@jon_neal](http://twitter.com/jon_neal) - http://twitter.com/jon_neal
* [@wookiehangover](http://twitter.com/wookiehangover) - http://wookiehangover.com
* [@iansym](http://twitter.com/iansym) - http://twitter.com/iansym

####[[⬆]](#toc) <a name='general'>General Questions:</a>

* What did you learn yesterday/this week?

* What excites or interests you about coding?

* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

* Talk about your preferred development environment. (OS, Editor, Browsers, Tools etc.)

* Can you describe your workflow when you create a web page?


* Can you describe the difference between progressive enhancement and graceful degradation?
  * Bonus points for describing feature detection

    * Graceful degradation
      * It is the practice of building a web site or application so it provides a good level of user experience in modern browsers. However, it will degrade gracefully for those using older browsers. The system may not be as pleasant or as pretty, but the basic functionality will work on older systems.
      * If you start with the most modern, cutting edge features, and then scale back, you're using graceful degradation.

    * Progressive enhancement 
      * The web site or application would establish a base-level of user experience for most browsers. More advanced functionality would then be added when a browser supports it.
      * If you start with the lowest common denominator and then add features for more modern browsers for your web pages, you're using progressive enhancement

    * Some methods for doing this are media queries, javascript polyfills and javascript detection libraries like Modernizr

* Explain what "Semantic HTML" means.

  * It means the opposite of using divs for everything. Taking advantage of new HTML5 elements like nav, article, header, footer, etc.
  
  * A semantic element clearly describes its meaning to both the browser and the developer.

  * Examples of non-semantic elements: div and span - Tells nothing about its content.

  * Examples of semantic elements: form, table, and img - Clearly defines its content.

* How would you optimize a websites assets/resources?
  * Looking for a number of solutions which can include:
    * File concatenation
    * File minification
    * CDN Hosted
    * Caching
    * etc.


  * Use photoshop to compress image files, choosing the best format for the best compression, then use ysmush.it to get even more lossless compression.
  * Concatenate and minify JavaScript and CSS Files
  * Use sprite sheets and icon fonts
  * Use a cdn for jquery and hosting video
  * Cache static files (in the past this would be typically done with a php header, but now you could use a HTML5 Cache Manifest)



* Why is it better to serve site assets from multiple domains?
  
  * Parallel downloads speed up the page load. Also, serving static files from a CDN (S3 for example) takes some load off your server.

* How many resources will a browser download from a given domain at a time?
  
  * Depends on the browser. The recommendation is to stick to 2-4 hostnames (source)


* Name 3 ways to decrease page load. (perceived or actual load time)
  
  * The best way is usually to reduce your image sizes. 
  * Minify and concatenate JS/CSS. 
  * Have JS at the bottom of the page. 
  * Use a CDN.


* If you jumped on a project and they used tabs and you used spaces, what would you do?
  * Suggest the project utilize something like EditorConfig (http://editorconfig.org)
  * Conform to the conventions (stay consistent)
  * `issue :retab! command`

  * Conform to the conventions (stay consistent)

* Write a simple slideshow page
  * Bonus points if it does not use JS.

  ??


* What tools do you use to test your code's performance?

  * Compuware APM AJAX Edition offers the most advanced deep-dive web performance diagnostics into JavaScript execution, DOM access, rendering activities and network traffic for analyzing and troubleshooting web applications. Quickly trace and profile web apps to understand performance characteristics, identify hotspots and isolate performance problems in Internet Explorer and Firefox

* If you could master one technology this year, what would it be?

  * Node.js


* What are the differences between Long-Polling, Websockets and SSE?

  * http://stackoverflow.com/questions/11077857/what-are-long-polling-websockets-server-sent-events-sse-and-comet
  * Before you can understand these technologies, you have to understand classic http web traffic first.

  Regular http:

    * A client requests a webpage from a server.
    * The server calculates the response
    * The server sends the response to the client.

  AJAX Polling:

    * A client requests a webpage from a server using regular http (see http above).
    * The requested webpage executes javascript which requests a file from the server at regular intervals (e.g. 0.5 seconds).
    * The server calculates each response and sends it back, just like normal http traffic.

    setInterval(function(){
        $.ajax({ url: "server", success: function(data){
            //Update your dashboard gauge
            salesGauge.setValue(data.value);
        }, dataType: "json"});
    }, 30000);

  AJAX Long-Polling:

    * A client requests a webpage from a server using regular http (see http above).
    * The requested webpage executes javascript which requests a file from the server.
    * The server does not immediately respond with the requested information but waits until there's new information available.
    * When there's new information available, the server responds with the new information.
    * The client receives the new information and immediately sends another request to the server, re-starting the process.

    (function poll(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
      }, dataType: "json", complete: poll, timeout: 30000 });
    })();

  HTML5 Server Sent Events (SSE) / EventSource:

    * A client requests a webpage from a server using regular http (see http above).
    * The requested webpage executes javascript which opens a connection to the server.
    * The server sends an event to the client when there's new information available.
      * real-time traffic from server to client, mostly that's what you'll need
      * you'll want to use a server that has an event loop
      * not possible to connect with a server from another domain

  HTML5 Websockets:

    * A client requests a webpage from a server using regular http (see http above).
    * The requested webpage executes javascript which opens a connection with the server.
    * The server and the client can now send each other messages when new data (on either side) is available.
      * real-time traffic from the server to the client and from the client to the server
      * you'll want to use a server that has an event loop
      * with WebSockets it is possible to connect with a server from another domain.
    * It is also possible to use a third party hosted websocket server, for example Pusher or others. This way you'll only have to implement the client side, which is very easy!

  Comet:

    * Comet is a collection of techniques prior to HTML5 which use streaming and long-polling to achieve real time applications


* Explain the importance of standards and standards bodies.
  
  * Standards are the only thing holding this crazy chaotic thing we call the web together. 
  * They make it possible for us to code up web stuff that works cross-browser/platform/device/screen


* What is FOUC? How do you avoid FOUC?
  * A flash of unstyled content (FOUC) is an instance where a web page appears briefly with the browser's default styles prior to loading an external CSS stylesheet, due to the web browser engine rendering the page before all information is retrieved. 
  * The page corrects itself as soon as the style rules are loaded and applied; however, the shift is quite visible and distracting.


  * The basic solution to handle FOUC is to keep it hidden until it has been properly styled.

  * I assume that you have control over the content that is displayed unstyled? In that case, wrap it in a 
      ```html 
      <div id="some-div" style="display:none">... content ... </div>.  
      ```
      Then use jQuery to show it when the entire document is ready:

  * $(function() { $("#some-div").show(); });

* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.

  * http://igoro.com/archive/what-really-happens-when-you-navigate-to-a-url/


    Browser: "Ok, so, I have a user requesting this address: www.cnn.com. I figure since there are no slashes or anything, this is a direct request of a main page. There was also no protocol or port defined, so I'll assume it's HTTP and going to port 80... oh well, first things first. Hey DNS, pal, wake up! Where is this www.cnn.com hiding at?"

    DNS: "Right... wait a sec, I'll ask the ISP servers. Ok, it looks like 157.166.226.25."

    Browser: "Ok. Internet Protocol Suite, your turn! Call 157.166.226.25, please. Send them this HTTP header. It's asking for the basic structure and content of their main page so I know what else to fetch... oh well, not that you'd care about this I guess. "

    TCP/IP: "What do you mean my turn? Like I wasn't just working my back off right there for the DNS? God, what does it take to get a bit of appreciation here..."

    Browser: ...

    TCP/IP: "Yeah, yeah... Connecting... I'll just ask the gateway to forward it. You know, it isn't all that easy, I'll have to divide your pretty request there into multiple parts so it reaches the end, and assemble any stuff they send back from all the thousands of packages I get... ah, right, you don't care. Figures."

    Meanwhile, at the CNN headquarters, a message finally ends up at the door of the Web Server.

    CNN Web Server: "Nzhôô! A customer! He wants news! The Front Page! How about it?"

    CNN Server Side Script Engine: "Right, will do! Front page, right?"

    CNN Database Server: "Yey! Work for me! What content do you need?"

    CNN Server Side Script Engine: "... um, sorry DB, I have a copy of front page right here in my cache, no need to compile anything. But hey, take this user ID and store it, I'll send it to the customer too, so we know who we're talking to later on."

    CNN Database Server: "Yey!"

    Back at the user's computer...

    TCP/IP: "Ooookay, here comes the reply. Oh boy, why do I have a feeling this'll be a big one..."

    Browser: "Uh, wow... this has all sorts of javascript code... bunch of images, couple of forms... Right, this'll take a while to render. Better get to it. Hey, IP system, there's a bunch more stuff you'll need to get. Let's see I need a few stylesheets from i.cdn.turner.com - via HTTP and ask for the file /cnn/.element/css/2.0/common.css. And then get some of those scripts at i.cdn.turner.com too, I'm counting six so far..."

    TCP/IP: "I get the picture. Just give me the server addresses and all that. And wrap that file stuff within the HTTP request, I don't want to deal with it."

    DNS: "Checking the i.cdn.turner.com... hey, bit of trivia, it's actually called cdn.cnn.com.c.footprint.net. IP is 4.23.41.126"

    Browser: "Sure, sure... wait a sec, this'll take a few nsec to process, I'm trying to understand all this script..."

    TCP/IP: "Hey, here's the CSS you asked for. Oh, and... yeah, those additional scripts also just came back."

    Browser: "Whew, there's more... some sort of video ad!"

    TCP/IP: "Oh boy, what fun that sounds like..."

    Browser: "There's all sorts of images too! And this CSS looks a bit nasty... right, so if that part goes there, and has this line at the top... how on earth would that fit anymore... no, I'll have to stretch this a bit to make it... Oh, but that other CSS file overrides that rule... Well, this one ain't going to be an easy piece to render, that's for sure!"

    TCP/IP: "Ok, ok, stop distracting me for a sec, there's a lot to do here still."

    Browser: "User, here's a small progress report for you. Sorry, this all might take a few secs, there's like 140 different elements to load, and going at 16 so far."

    One or two seconds later...

    TCP/IP: "Ok, that should be all. Hey, listen... sorry I snapped at you earlier, you managing there? This sure seems like quite the load for you too."

    Browser: "Phew, yeah, it's all these websites nowdays, they sure don't make it easy for you. Well, I'll manage. It's what I'm here for."

    TCP/IP: "I guess it's quite heavy for all of us these days... oh, stop gloating there DNS!"

    Browser: "Hey user! The website's ready - go get your news!"


    Browser splits what you type (the URL) into a hostname and a path.
    Browser forms an HTTP request to ask for the data at the given hostname and path.
    Browser performs DNS lookup to resolve the hostname into an IP address.
    Browser forms a TCP/IP connection to the computer specified via the IP address. (This connection is actually formed out of many computers, each passing the data along to the next.)
    Browser sends the HTTP request down the connection to the given IP address.
    That computer receives the HTTP request from the TCP/IP connection and passes it to the web server program.
    Web server reads the hostname and path and finds or generates the data that you've asked for.
    Web server generates an HTTP response containing that data.
    Web server sends that HTTP response back down the TCP/IP connection to your machine.
    Browser receives the HTTP response and splits it into headers (describing the data) and the body (the data itself).
    Browser interprets the data to decide how to display it in the browser - typically this is HTML data that specifies types of information and their general form.
    Some of the data will be metadata that specifies further resources that need to be loaded, such as style sheets for detailed layout, or inline images, or Flash movies. This metadata is specified again as a URL, and this whole process repeats for each one until all are loaded.



####[[⬆]](#toc) <a name='html'>HTML Questions:</a>

* What's a `doctype` do?

  * Defines the version of html the document is using.
  * The DOCTYPE tells the consuming user agent (web browsers, web crawlers, validation tools) what type of document the file is. 
  * Using it ensures that the consumer correctly parses the HTML as you intended it.
  * <!DOCTYPE html> - html5


* What's the difference between standards mode and quirks mode?
  
  * Quirks mode is for old (really old!) browsers. It essentially gives them permission to continue to follow their own busted way of rendering a web page as opposed to standards mode where all the browsers have come to an agreement about how to handle styling and markup


* What are the limitations when serving XHTML pages?
  * Are there any problems with serving pages as `application/xhtml+xml`?

  * The amusing (and somewhat frustrating) part of this is that not all browsers recognise application/xhtml+xml, and will fail to render the page or give you a download prompt - the latter being a case of, "I don't know what an 'application/xhtml+xml' file is - what do you want to do with it?"

  * Internet Explorer is one of the "unsupported" browsers mentioned (as it often is when "the rules" are being discussed,) as well as earlier versions of Opera and others. The argument could be made, "why bother" with all this? My reasoning is that this is the evolution of browsers. There will always be some who support the latest and greatest and play by the rules, and then there will be everyone else. Provide gracefully-degrading content, and everyone should be happy.


* How do you serve a page with content in multiple languages?


* What kind of things must you be wary of when design or developing for multilingual sites?

  * Spacing is a biggie. You want to make sure you have a fluid design that can accommodate different sized type. This can be particularly noticeable in navigation buttons that might overlap content or break in the middle of a word.

* What are `data-` attributes good for?
  
  * Storing data in the DOM.

* Consider HTML5 as an open web platform. What are the building blocks of HTML5?

  * HTML, CSS and JavaScript

* Describe the difference between cookies, sessionStorage and localStorage.
  
  * Cookies are for storing small amounts of website data, such as a user name. 
  * HTML5 Web Storage is a faster, improved means of storing website data. 
  * sessionsStorage is for temporary data, and localStorage is for persistant data.

* Can you explain the difference between `GET` and `POST`?
  
  * GET is used to retrieve remote data, and POST is used to insert/update remote data



####[[⬆]](#toc) <a name='css'>CSS Questions:</a>

* Describe what a "reset" CSS file does and how it's useful.

* Describe Floats and how they work.

* What are the various clearing techniques and which is appropriate for what context?

* Explain CSS sprites, and how you would implement them on a page or site.

* What are your favourite image replacement techniques and which do you use when?

* CSS property hacks, conditionally included .css files, or... something else?

* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?

* What are the different ways to visually hide content (and make it available only for screen readers)?

* Have you ever used a grid system, and if so, what do you prefer?

* Have you used or implemented media queries or mobile specific layouts/CSS?

* Any familiarity with styling SVG?

* How do you optimize your webpages for print?

* What are some of the "gotchas" for writing efficient CSS?

* What are the advantages/disadvantages of using CSS preprocessors? (SASS, Compass, Stylus, LESS)
  * If so, describe what you like and dislike about the CSS preprocessors you have used.

* How would you implement a web design comp that uses non-standard fonts?
  * Webfonts (font services like: Google Webfonts, Typekit etc.)

* Explain how a browser determines what elements match a CSS selector?

* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

* List as many values for the display property that you can remember.

* What's the difference between inline and inline-block?

* What's the difference between a relative, fixed, absolute and statically positioned element?

####[[⬆]](#toc) <a name='js'>JS Questions:</a>

* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* How do you go about testing your JavaScript?
* AMD vs. CommonJS?
* What's a hashtable?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`. 
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What's a typical use case for anonymous functions?
* Explain the "JavaScript module pattern" and when you'd use it.
  * Bonus points for mentioning clean namespacing.
  * What if your modules are namespace-less?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
* explain `Function.prototype.bind`?
* When do you optimize your code?
* Can you explain how inheritance works in JavaScript?
* When would you use `document.write()`?
  * Most generated ads still utilize `document.write()` although its use is frowned upon
* What's the difference between feature detection, feature inference, and using the UA string
* Explain AJAX in as much detail as possible
* Explain how JSONP works (and how it's not really AJAX)
* Have you ever used JavaScript templating?
  * If so, what libraries have you used? (Mustache.js, Handlebars etc.)
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built in JavaScript objects not a good idea?
* Why is extending built ins a good idea?
* Difference between document load event and document ready event?
* What is the difference between `==` and `===`?
* Explain how you would get a query string parameter from the browser window's URL.
* Explain the same-origin policy with regards to JavaScript.
* Describe inheritance patterns in JavaScript.
* Make this work:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memoization (avoiding calculation repetition) in JavaScript.
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is the arity of a function?
* What is `"use strict";`? what are the advantages and disadvantages to using it?

####[[⬆]](#toc) <a name='jquery'>jQuery Questions:</a>

* Explain "chaining".
* Explain "deferreds".
* What are some jQuery specific optimizations you can implement?
* What does `.end()` do?
* How, and why, would you namespace a bound event handler?
* Name 4 different values you can pass to the jQuery method.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* What is the effects (or fx) queue?
* What is the difference between `.get()`, `[]`, and `.eq()`?
* What is the difference between `.bind()`, `.live()`, and `.delegate()`?
* What is the difference between `$` and `$.fn`? Or just what is `$.fn`.
* Optimize this selector:
```javascript
$(".foo div#bar:eq(0)")
```

####[[⬆]](#toc) <a name='jscode'>Code Questions:</a>


```javascript
modulo(12, 5) // 2
```
*Question: Implement a modulo function that satisfies the above*


```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Question: What value is returned from the above statement?*

**Answer: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Question: What is the value of `window.foo`?*

**Answer: "bar"** *(only if `window.foo` was falsey otherwise it will retain its value)*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Question: What is the outcome of the two alerts above?*

**Answer: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Question: What is the value of `foo.length`?*

**Answer: `2`**

####[[⬆]](#toc) <a name='fun'>Fun Questions:</a>

* What's the coolest thing you've ever coded, what are you most proud of?
* What are your favorite parts about the developer tools you use?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?

####[[⬆]](#toc) <a name='references'>Other Great References:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
* http://davidshariff.com/quiz/
* http://blog.sourcing.io/interview-questions