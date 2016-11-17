// Tell Angular to start up your application.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//library for using Angular in a web browser.


import { AppModule } from './app.module';//get AppModule

platformBrowserDynamic().bootstrapModule(AppModule);

//This code initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.