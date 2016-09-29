import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { SwapiService, SWApiObject } from '../../services/swapi.service';
import { SelectedPersonService } from '../../services/selectedPerson';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'listing',
    templateUrl: './components/listing/listing.component.html',
    styleUrls: ['./components/listing/listing.component.css']

})

export class ListingComponent implements OnInit {
    public dataItems: Array<SWApiObject>;

    constructor(private swapi: SwapiService, public selectedPerson: SelectedPersonService) {
        this.dataItems = [];
        Observable.merge(
            this.swapi.getPeople(1),
            this.swapi.getPeople(2),
            this.swapi.getPeople(3),
            this.swapi.getPeople(4),
            this.swapi.getPeople(5),
            this.swapi.getPeople(6)).subscribe(resp => this.dataItems = [...this.dataItems, ...resp]);
    }

    ngOnInit() { }

    onSetupItemView(args: SetupItemViewArgs) {
        args.view.context.third = (args.index % 3 === 0);
        //     args.view.context.header = ((args.index + 1) % items.length === 1);
        //     args.view.context.footer = (args.index + 1 === items.length);
    }
}