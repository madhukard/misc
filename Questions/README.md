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

    ```html 
    setInterval(function(){
        $.ajax({ url: "server", success: function(data){
            //Update your dashboard gauge
            salesGauge.setValue(data.value);
        }, dataType: "json"});
    }, 30000);
    ```

  AJAX Long-Polling:

    * A client requests a webpage from a server using regular http (see http above).
    * The requested webpage executes javascript which requests a file from the server.
    * The server does not immediately respond with the requested information but waits until there's new information available.
    * When there's new information available, the server responds with the new information.
    * The client receives the new information and immediately sends another request to the server, re-starting the process.

    ```html 
    (function poll(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
      }, dataType: "json", complete: poll, timeout: 30000 });
    })();
    ```

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

  * A CSS reset is a set of styles you load prior to your other styles, to remove browser built-in styles.
  * If these styles are not "reset", you will see unwanted styles/effects and things breaking. Its always recommended to "reset" the browser's styles.

  * A CSS reset is used to create a baseline set of styles that will display the same across browsers.


* Describe Floats and how they work.

  * Float is a CSS positioning property.
  * float: Left, Right, None, Inherit
  * Elements can be floated left or right, elements after the float will then wrap around it (unless the clear property is applied to the element).
  * Aside from the simple example of wrapping text around images, floats can be used to create entire web layouts


* What are the various clearing techniques and which is appropriate for what context?

  * If you are in a situation where you always know what the succeeding element is going to be, you can apply the clear: both; value to that element and go about your business.
  
  * The Empty Div Method is, quite literally, an empty div. 

      ```html
      <div style="clear: both;"></div>.
      ```

  * The Overflow Method relies on setting the overflow CSS property on a parent element. If this property is set to auto or hidden on the parent element, the parent will expand to contain the floats, effectively clearing it for succeeding elements. 
  
  * The Easy Clearing Method uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class like "clearfix" to it. Then apply this CSS:
    
    ```html
    .clearfix:after { 
       content: "."; 
       visibility: hidden; 
       display: block; 
       height: 0; 
       clear: both;
    }
    ```

* Explain CSS sprites, and how you would implement them on a page or site.

  * An image sprite is a collection of images put into a single image.

  * A web page with many images can take a long time to load and generates multiple server requests.

  * Using image sprites will reduce the number of server requests and save bandwidth.

  * Using SpriteMe
    * SpriteMe is a bookmarklet. So after you've put it up in your bookmarks bar, just go to any website and click it. It will open up an overlay over the right side of your screen


* What are your favourite image replacement techniques and which do you use when?

  * CSS image replacement is a technique of replacing a text element (usually a header tag) with an image

  * An example of this would be including a logo on a page. You may want to use a h1 tag and text for this for the accessibility and SEO benefits, but ideally you'd like to show your logo, not text.

  * FIR or "Fahrner Image Replacement

    ```html 
      HTML
      <h1 id="technique-one">
        <span>CSS-Tricks</span>
      </h1>
    ```

    ```html 
    CSS

    h1#technique-one {
      width: 250px;
      height: 25px;
      background-image: url(logo.gif);
    }
    h1#technique-one span {
      display: none;
    }

    ```


  * Phark Method

    ```html 
      HTML
      <h1 class="technique-three">
        CSS-Tricks
      </h1>
    ```

    ```html 
    CSS

    h1.technique-three {
      width: 350px; 
      height: 75px;
      background: url("images/header-image.jpg");
      text-indent: -9999px;
    }

    ```  


* CSS property hacks, conditionally included .css files, or... something else?

  * ??



* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?

  * Progressive Enhancement
  * Graceful Degradation


  * First, its important to take a look at any analytics you can to see what browsers and devices your users are using. Next of course, it depends on the content. I've used various approaches (graceful degradation, progressive enhancement, mobile first). I like the responsive web design approach of primarily using media queries. Also doing feature detection (usually with Modernizr) combined with polyfills.


* What are the different ways to visually hide content (and make it available only for screen readers)?
  
  ```html
  .hide {
   display: none;
  }
  ```

  TO available for screen readers

  ```html 
    .hide {
       position: absolute !important;
       top: -9999px !important;
       left: -9999px !important;
    }
  ```


  * Some people have used text-indent or absolute positioning to move the content off the page, but the favorable approach is to use clip: rect(1px, 1px, 1px, 1px); along with some other properties


* Have you ever used a grid system, and if so, what do you prefer?

  * Bootstrap Grid System

* Have you used or implemented media queries or mobile specific layouts/CSS?

  * Yes for Android phonegap application


* Any familiarity with styling SVG?

  * Add SVG node to DOM node and Apply CSS


* How do you optimize your webpages for print?
  
  * Create A Stylesheet For Print
  * Avoid Unnecessary HTML Tables
  * Hiding Needless Element For Print
  * Size Page For Print
  * Use Page Break


* What are some of the "gotchas" for writing efficient CSS?

    * Use efficient CSS selectors
      
      * Avoid a universal key selector.
        * Allow elements to inherit from ancestors, or use a class to apply a style to multiple elements.
      
      * Make your rules as specific as possible. 
        * Prefer class and ID selectors over tag selectors.
      
      * Remove redundant qualifiers. 
        
        These qualifiers are redundant:
          * ID selectors qualified by class and/or tag selectors
          * Class selectors qualified by tag selectors (when a class is only used for one tag, which is a good design practice anyway).
    

      * Avoid using descendant selectors, especially those that specify redundant ancestors.
          * For example, the rule body ul li a {...} specifies a redundant body selector, since all elements are descendants of the body tag.
    
      * Use class selectors instead of descendant selectors.
    
    * Avoid CSS expressions
    
    * Put CSS in the document head


* What are the advantages/disadvantages of using CSS preprocessors? (SASS, Compass, Stylus, LESS)
  * If so, describe what you like and dislike about the CSS preprocessors you have used.

* How would you implement a web design comp that uses non-standard fonts?
  * Webfonts (font services like: Google Webfonts, Typekit etc.)



* Explain how a browser determines what elements match a CSS selector?

    * Browsers read CSS from right to left. 
    * The less rules the browser has to evaluate, the faster the styling engine will perform.

    * To resolve conflicts between rules applying to the same element, browsers follow a set of rules to determine which selector is more specific (CSS Specificity). There is a weighted point system, where element selectors are 1 point, class selectors are 10 points and ID selectors are 100 points. In the case of 2 equally weighted selectors, the last rule is the one that gets followed.

    * As the browser parses HTML, it constructs an internal document tree representing all the elements to be displayed. 
    * It then matches elements to styles specified in various stylesheets, according to the standard CSS cascade, inheritance, and ordering rules. In Mozilla's implementation (and probably others as well), for each element, the CSS engine searches through style rules to find a match. 
    * The engine evaluates each rule from right to left, starting from the rightmost selector (called the "key") and moving through each selector until it finds a match or discards the rule. 
    * (The "selector" is the document element to which the rule should apply.)


* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

  * All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

  * The CSS box model is essentially a box that wraps around HTML elements, and it consists of: margins, borders, padding, and the actual content.

  * When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add the padding, borders and margins.

  * The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements.
    * box-sizing: content-box | padding-box | border-box

  * When you set box-sizing: border-box; on an element, the padding and border of that element no longer increase its width

* List as many values for the display property that you can remember.

  * none
    * Setting display to none will render the page as though the element does not exist. visibility: hidden; will hide the element, but the element will still take up the space it would if it was fully visible

  * inline
    * An inline element can wrap some text inside a paragraph <span> like this </span> without disrupting the flow of that paragraph
  
  * block 
    * A block-level element starts on a new line and stretches out to the left and right as far as it can. Other common block-level elements are p and form, and new in HTML5 are header, footer, section, and more. 

* What's the difference between inline and inline-block?
  
  * inline-block elements are like inline elements but they can have a width and height.


* What's the difference between a relative, fixed, absolute and statically positioned element?

  * http://learnlayout.com/toc.html

  * static

    * An element with position: static; is not positioned in any special way


  * relative

    * relative behaves the same as static unless you add some extra properties.
    * Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. 
    * Other content will not be adjusted to fit into any gap left by the element.

  * fixed

    * A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
    * As with relative, the top, right, bottom, and left properties are used

  * Absolute

    * Absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. 
    * If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling


####[[⬆]](#toc) <a name='js'>JS Questions:</a>

* Explain event delegation

    * Event delegation allows you to avoid adding event listeners to specific nodes;  instead, the event listener is added to one parent.  
    * That event listener analyzes bubbled events to find a match on child elements.
    * Event delegation allows us to attach a single event listener, to a parent element, that will fire for all children matching a selector, whether those children exist now or are added in the future

* Explain how `this` works in JavaScript

    * Every line of JavaScript code is run in an “execution context.” 

    * The JavaScript runtime environment maintains a stack of these contexts, and the top execution context on this stack is the one that’s actively running.

    * There are three types of executable code: Global code, function code, and eval code.


    * The object that this refers to is redetermined every time control enters a new execution context and remains fixed until control shifts to a different context. 

    * The value of this is dependent upon two things: The type of code being executed (i.e., global, function, or eval) and the caller of that code


    * By default, this refers to the global object.
    * When a function is called as a property on a parent object, this refers to the parent object inside that function.
    * When a function is called with the new operator, this refers to the newly created object inside that function.
    * When a function is called using call or apply, this refers to the first argument passed to call or apply. If the first argument is null or not an object, this refers to the global object.


* Explain how prototypal inheritance works

    * In most languages, there are classes and objects. Classes inherit from other classes.

    * In JavaScript, the inheritance is prototype-based. That means that there are no classes. Instead, an object inherits from another object 

    * When accessing the properties of an object, JavaScript will traverse the prototype chain upwards until it finds a property with the requested name.


        ```html
          function Foo() {
              this.value = 42;
          }
          Foo.prototype = {
              method: function() {}
          };

          function Bar() {}

          // Set Bar's prototype to a new instance of Foo
          Bar.prototype = new Foo();
          Bar.prototype.foo = 'Hello World';

          // Make sure to list Bar as the actual constructor
          Bar.prototype.constructor = Bar;

          var test = new Bar(); // create a new bar instance

          // The resulting prototype chain
          test [instance of Bar]
              Bar.prototype [instance of Foo]
                  { foo: 'Hello World' }
                  Foo.prototype
                      { method: ... }
                      Object.prototype
                          { toString: ... /* etc. */ }

      ```


    * In the code above, the object test will inherit from both Bar.prototype and Foo.prototype; hence, it will have access to the function method that was defined on Foo. 
    * It will also have access to the property value of the one Foo instance that is its prototype. 
    * It is important to note that new Bar() does not create a new Foo instance, but reuses the one assigned to its prototype; thus, all Bar instances will share the same value property.


* How do you go about testing your JavaScript?

    * Using QUnit - developed by jQuery team.



* AMD vs. CommonJS?

    * AMD - Asynchronous Module Definition

      * Simple, flexible module format
      * Forward compatibility w/ ES.Next / Harmony modules (via translation)
      * Designed with browser environment in mind
      * Designed to accommodate asynchronous loading
      * AMD plugins can load other types of resources, such as images, html templates, css, localized language/strings files, etc. 
      * Module types - objects, functions, constructors, string, JSON, numbers, dates.

          ```html
          Module format
          // MyApp/MyModule:
          define(

            ['pkgA/modA', 'pkgA/modB', 'pkgZ/modC'],

            function (modA, modB, modC) {

              var myModule = {
                doStuff: function() { ... }
              }

              return myModule;
            }
          );     

          ```

    * CommonJS

      * require, module, and exports
      * assumes sync
      * Module types - objects

        ```html
        var modA = require('pkgA/modA');
        var modB = require('pkgA/modB');
        var modC = require('pkgZ/modC');

        function doStuff() { ... }

        exports.doStuff = doStuff;

        ```



* What's a hashtable?

  * A hashtable is an associative array of key/value pairs. JavaScript Objects are hashtables.



* Explain why the following doesn't work as an IIFE: `function foo(){ }();`. 
  * What needs to be changed to properly make it an IIFE?


    * Immediately-Invoked Function Expression (IIFE)
    * Function Expression - var test = function() {};
    * Function Declaration - function test() {};
    * A function expression can be called (invoked) immediately by using a set of parentheses, but a function declaration cannot be.
    * By wrapping the anonymous function inside of parentheses, the JavaScript parser knows to treat the anonymous function as a function expression instead of a function declaration. 

      ```html
      ( // evaluate the function inside the parentheses
      function() {}
      ) // and return the function object
      () // call the result of the evaluation

      ```

    * There are other ways to evaluate and directly call the function expression which, while different in syntax, behave the same way.

      ```html
      // A few other styles for directly invoking the 
      !function(){}()
      
      +function(){}()
      
      (function(){}());
      
      (function(){ }()); // Crockford recommends this one
      
      var i = function(){ return 10; }();

      true && function(){ /* code */ }();

      // and so on...

      ```

* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
  * How would you go about checking for any of these states?

    * null is a JavaScript keyword that indicates the absence of a value. 
    * undeclared vars have not been declared by a var statement. 
    * undefined vars have been declared but have no value.

    * In JavaScript, “undefined” is a global variable (a property of the global object), that is created at run time. 
    * This global variable represents something  that has not been initialized, as well as an object property or array index that does not exist. Also, when you do not supply an argument for a function parameter, it will have the value of “undefined”. 
    * Furthermore, when a function does not return a value, it returns “undefined”


* What is a closure, and how/why would you use one?

    * Closures provide a means of putting function definitions and expressions inside of other functions. A common use would be binding event handler functions so that 'this' refers to the event object.


* What's a typical use case for anonymous functions?

    * For single use methods, like when you need to pass a one-liner of code to another function. Or when you want to scope vars via a closure

* Explain the "JavaScript module pattern" and when you'd use it.
  * Bonus points for mentioning clean namespacing.
  * What if your modules are namespace-less?


    * The module pattern is a way of organizing and encapsulating code via a closure. 
    * It allows you to create public/private functions and vars inside an object (the module). 
    * It lessens the likelihood of naming conflicts and unintended interactions with other functions/vars on the page. 
    * Modules should work independently and be easily extensible. 
    * Using modules enables to write widgets and plugins that interact with each other.


* How do you organize your code? (module pattern, classical inheritance?)

    * I like using the Module Pattern quite a bit. Whenever possible, I like to widgetize/pluginize my code.
    * $.class & OSGI plugin


* What's the difference between host objects and native objects?
  
    * Native Objects are objects/methods that exist in the ECMAScript spec (Date, Math, String methods, etc.) 

    * Host Objects are created by the environment (window, history, getElementByID, etc.) or ones you create yourself.


* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

    * First one executes function & returns undefined
    * Second one creates new object and call Person function as constructor and returns new object created.

* What's the difference between `.call` and `.apply`?

    * .apply and .call do the same thing, but .apply uses an array containing arguments for the target method as the second parameter.

* explain `Function.prototype.bind`?

    * Use this to create functions that when called have a particular value for this and therefore binding it to the original value of the target object

* When do you optimize your code?
  
    * All the time, from the beginning structure, to refactoring along the way, to re-evaluating at the end.

* Can you explain how inheritance works in JavaScript?

    * JavaScript does not have classes - it uses prototypal inheritance


* When would you use `document.write()`?
  * Most generated ads still utilize `document.write()` although its use is frowned upon


    Pro:
    * It's the easiest way to embed inline content from an external (to your host/domain) script.
    * You can overwrite the entire content in a frame/iframe.


    Con:
    * It serializes the rendering engine to pause until said external script is loaded, which could take much longer than an internal script.
    * It is usually used in such a way that the script is placed within the content, which is considered bad-form.


    * It can block your page

      document.write only works while the page is loading; If you call it after the page is done loading, it will overwrite the whole page -- the effectively means you have to call it from an inline script block. And that will prevent the browser from processing parts of the page that follow. Scripts and Images will not be downloaded until the writing block is finished.


* What's the difference between feature detection, feature inference, and using the UA string

      * Using feature detection over user agent detection is favored because devices and device features are constantly changing and therefore it is better to design behavior based on whether particular features are present or not. For example, by using Modernizr or yepnope.


* Explain AJAX in as much detail as possible


      * AJAX is used for asynchonously sending and receiving data without interfering with any processes occuring on the page. It is used for things like form submission, loading dynamic content assets and user interaction like chat rooms and multiplayer games. When data is returned from a server, a callback function is then executed that handles the data. AJAX stands for Asynchronous JavaScript and XML, which has become a bit outdated as most are using JSON these days. But, AJAJ just doesn’t have as nice a ring to it though.


* Explain how JSONP works (and how it's not really AJAX)

      * JSONP stands for JSON with padding. 
      * Under the same origin policy (SOP), JavaScript code loaded from one domain is not allowed to fetch data from another domain. However, this restriction does not apply to the ```javascript<script>``` tag, which can specify a URL of JavaScript code to load from a remote server in a src attribute. 
      * This was used to work around the SOP limitations by pointing the src to a web service returning dynamically generated JavaScript code (JSONP), instead of JSON data. 
      * Because the code is loaded by the ```javascript<script>``` tag, it can be normally executed and return the desired data block, thus bypassing SOP.

* Have you ever used JavaScript templating?
  * If so, what libraries have you used? (Mustache.js, Handlebars etc.)

    * jQuery template, jade, swig



* Explain "hoisting".
    
    * Hoisting is a feature in JavaScript where var declarations are moved to the top of the function body. 
    * However, the initialization/assignment of the var is not. 



* Describe event bubbling.

    * Events are dispatched first at the event target, then propagate up through the target element's parent and ancestors, 'bubbling' all the way up to the document root.


* What's the difference between an "attribute" and a "property"?

    * An attribute carries information about an element in the form of a key value pair.
    * A property is the key portion of that attribute.


* Why is extending built in JavaScript objects not a good idea?

    * The main reason not to do it is to avoid conflicts - for example, if two different scripts are extending an object in an incompatible way. If every JS library out there started extending object prototypes, it would create a huge mess. It is best to leave the built-ins alone, as that way everyone knows their expected behavior and there are no surprises down the road.


* Why is extending built ins a good idea?

    * The temptation is that by extending a native object, you can quickly bring useful functionality to JS prototypes, like Array or String. But that quick solution can lead to big headaches later on. Are there any good use cases? Some say a worthy use would be making polyfills for older browsers to bring them up to the latest EcmaScript standards, yet even that seems open to causing trouble. Best steer clear. There be dragons.


* Difference between document load event and document ready event?

    * The ready event occurs after the HTML document has been loaded, 
    * while the onload event occurs later, when all content (e.g. images) also has been loaded.


    * The onload event is a standard event in the DOM, while the ready event is specific to jQuery. 
    * The purpose of the ready event is that it should occur as early as possible after the document has loaded, so that code that adds funcionality to the elements in the page doesn't have to wait for all content to load.


* What is the difference between `==` and `===`?

    * === is strictly equal, while == allows for truthiness, where the objects being compared are equal after type coercion. For example, 1=="1" is true, but 1==="1" is false.


* Explain how you would get a query string parameter from the browser window's URL.


    * query  = window.location.search.substring(1)


    ```javascript
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    ```

* Explain the same-origin policy with regards to JavaScript.

    * A script can read only the properties of windows and documents that are loaded from the same host, through the same port, and by the same protocol as the script itself. ([source])


* Make this work:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```

    ```javascript
      Array.prototype.duplicator = function() {
          return this.concat(this);
      }
    ```
    

* Describe a strategy for memoization (avoiding calculation repetition) in JavaScript.


     * The standard way to do it is to create a memoization function that creates a cache object for calculations. You then pass calculations into the function, which checks if it already exists in the cache. If it does, it returns the result without having to actually perform the calculation. If the calculation doesn't exist in the cache, it performs and returns the calculation, then also stores it in the cache object for next time.


* Why is it called a Ternary expression, what does the word "Ternary" indicate?

    * Ternary indicates an inline if statement, comprised of 3 parts. The first is a boolean expression. The second is an expression that is returned if the boolean is true. The third is an expression returned if the boolean is false


* What is the arity of a function?

    * The arity property used to return the number of arguments expected by the function, however, it no longer exists and has been replaced by the Function.prototype.length property.


* What is `"use strict";`? what are the advantages and disadvantages to using it?

    * Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

    * Strict mode helps out in a couple ways:

      It catches some common coding bloopers, throwing exceptions.
      It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
      It disables features that are confusing or poorly thought out.


####[[⬆]](#toc) <a name='jquery'>jQuery Questions:</a>

* Explain "chaining".

    * jQuery methods return an object, therefore making it possible to run sequential methods on the same jQuery object. This results in shorter, cleaner code that runs faster because it reduces interaction with the DOM.


* Explain "deferreds".

    * A jQuery Deferred Object is used to manage callbacks based on success and failure of other functions. It is primarily used for handling ajax requests that require flexible or complex state management. Multiple callbacks can be attached to a single deferred object in a chain, with methods like deferred.then() deferred.done() and deferred.fail(). Callbacks can even be bound after the event dispatch has occured.


* What are some jQuery specific optimizations you can implement?

    * Use chaining as much as possible. Optimize selectors (for example using .find() rather than context). 
    * Cache selectors that get run more than once. Use .on() assigned to a parent element, rather than binding lots of event listeners to child elements. 
    * Reduce the amount of DOM manipulation (for example, if you are building a list, instead of using multiple .append() calls to a <ul> element, instead build all the <li> elements as a string and use .append() just once).

* What does `.end()` do?

    * You use .end() when chaining methods to revert back to a previous selected group of elements. For example, if you do a .find() and then .end(), it reverts the selector back to its state before the .find() was executed. It enables you to do less DOM lookups.


* How, and why, would you namespace a bound event handler?

    * You would namespace an event handler if you want to refer to a specific event handler for triggering or removal (for example, you could have multiple click event handlers bound to an element, but only want to remove one of them).


* Name 4 different values you can pass to the jQuery method.
  
    * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.


* What is the effects (or fx) queue?

    * It is jQuery’s library for animation.


* What is the difference between `.get()`, `[]`, and `.eq()`?

    * eq() returns a jQuery object
    * get() returns a DOM element.


* What is the difference between `.bind()`, `.live()`, and `.delegate()`?

    * Did you know that the jQuery .bind(), .live(), and .delegate() methods are just one line pass throughs to the new jQuery 1.7 .on() method? The same is true of the .unbind(), .die(), and .undelegate() methods.


* What is the difference between `$` and `$.fn`? Or just what is `$.fn`.

    * $ is a function (specifically, a variable pointing to the jQuery function — an alias). 
    * $.fn is a property on that function, which points to the prototype of the internal init function jQuery uses to create instances, as we can see in the jQuery code:

        jQuery.fn.init.prototype = jQuery.fn;


    * $.fn is there so that it's easy to add properties to it. When you create jQuery objects, they have those properties, because of JavaScript's prototypical inheritance. The most common properties to add to it are, of course, functions that do things (jQuery plug-ins).

    definition:

    $.fn.myPlugin = function(){...}

    usage:

    $(selector).myPlugin();


* Optimize this selector:
```javascript
$(".foo div#bar:eq(0)")
```

    * $('#bar')


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