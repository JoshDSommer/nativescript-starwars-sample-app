import {Component} from "@angular/core";
import { SwapiService } from './services/swapi.service';
import { SelectedPersonService } from './services/selectedPerson';

@Component({
    selector: "my-app",
    template: `
        <page-router-outlet></page-router-outlet>
    `,
    providers:[SwapiService,SelectedPersonService]
})
export class AppComponent {}
