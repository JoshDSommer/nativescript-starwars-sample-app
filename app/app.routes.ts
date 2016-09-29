import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from 'nativescript-angular/router'

import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';

export var routes: Routes = [
	{ path: "", component: ListingComponent  },
	{ path: "details/:name", component: DetailsComponent }
];
export let providedRoutes = NativeScriptRouterModule.forRoot(routes);