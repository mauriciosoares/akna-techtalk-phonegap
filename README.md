#Techtalk about Phonegap

Guides for the Techtalk about Phonegap at [Akna Software](http://www.akna.com.br/).

Sorry folks, but this Techtalk is only for IOS, so you're gonna need a Mac. Probably running this on Android is similar.

---

First of all, you need `node` and `npm` to run the cli commands, so go ahead and install nodejs, you can find a nice tutorial at [nodejs.org](nodejs.org).

Then you can install phonegap globally running:

```npm install -g phonegap```

You will also need IOS Simulator, so rum 

```npm install -g ios-sim```

After installing these, you can run:

```phonegap create my-app```

This will kick off your project, creating the structure for your app, you can enter in the `www` folder, and inside there you can start writting your code!

After your code is done, you can run:

```phonegap run ios```

That'll create a folder `platforms/ios`, and inside there is your xcode project.