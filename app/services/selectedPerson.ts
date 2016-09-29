import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { SWApiObject } from './swapi.service';

@Injectable()
export class SelectedPersonService {

	person$ = new BehaviorSubject<SWApiObject>(null);

	setPerson(person: SWApiObject) {
		this.person$.next(person);
	}

	subscribe(): Observable<SWApiObject>{
		return this.person$;
	}

	constructor() {


	}
}