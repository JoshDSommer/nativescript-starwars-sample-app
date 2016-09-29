// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { providedRoutes } from './app.routes';


import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
    declarations: [AppComponent, DetailsComponent, ListingComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        providedRoutes,
        NativeScriptHttpModule
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);