#Techtalk about Phonegap

Guides for the Techtalk about Phonegap at [Akna Software](http://www.akna.com.br/).

Sorry folks, but this Techtalk is only for IOS, so you're gonna need a Mac. Probably running this on Android is similar.

---

First of all, you need `node` and `npm` to run the cli commands, so go ahead and install nodejs, you can find a nice tutorial at [nodejs.org](nodejs.org).

Then you can install phonegap globally running:

    npm install -g phonegap

You will also need IOS Simulator, so rum

    npm install -g ios-sim

After installing these, you can run:

    phonegap create my-app

This will kick off your project, creating the structure for your app, you can enter in the `www` folder, and inside there you can start writting your code!

After your code is done, you can run:

    phonegap build ios



That'll create a folder `platforms/ios`, and inside there is your xcode project.

You can now enter in the ios folder and run the xcode file, in there you can end configuring your app (with ID and some stuff that apple requires), and also run the simulator!

You can use use simulator running `phonegap run ios`, but for some reason its quite slow... I prefer to build and then run it on xcode.

---

##Some tibs for Mobile Development with HTML + CSS

Use `transition: translateX, translateY or translateZ` for creating the page transitions instead of `left` or `top`, it activates the hardware acceleration of the devices, and makes the transition way smoother when you have multiple elements in the DOM.


Make use of the `#` routes of the browser, you can always use `window.history.back` for making things easier.

For AngularJS use `ngTouch`, it helps with events such as click (so it become tap, belive me, it has a HUGE difference), or slides...

Also use `ngAnimate` for creating the transitions...

And of course `ngRoute` for the routing stuff :D