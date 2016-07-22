import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {appRouterProviders} from './app.routes';

// enableProdMode();

bootstrap(AppComponent, [
    appRouterProviders
]).catch(err => console.log(err));
