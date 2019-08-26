// Note: In order to have a working app, should either import zone.js and core-js shim in the module.ts OR ref these scripts from the index.html.
import 'core-js';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);