import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ImageColors } from 'nativescript-image-colors';


import { File, knownFolders } from 'file-system';
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { Page } from 'ui/page';
import { topmost } from 'ui/frame';

import { Observable } from 'rxjs/Rx';
import { SwapiService, SWApiObject } from '../../services/swapi.service';
import { SelectedPersonService } from '../../services/selectedPerson';

@Component({
	selector: 'details',
	templateUrl: './components/details/details.component.html',
	styleUrls: ['./components/details/details.component.css']
})

export class DetailsComponent implements OnInit, AfterViewInit {
	name: string;
	imageSrc: string;
	person$: Observable<SWApiObject>;

	@ViewChild('backgroundFade') background: ElementRef;
	@ViewChild('image') image: ElementRef;

	constructor(private swapi: SwapiService, public selectedPerson: SelectedPersonService) {
		this.person$ = this.selectedPerson.subscribe();
		this.person$.subscribe(person => this.setImage(person.name));
	}

	private setImage(name: string): void {
		let imagePath = `/images/${name.toLowerCase().replace(' ', '-')}.png`;
		this.imageSrc = `~${imagePath}`;
		let fileLocation = `${knownFolders.currentApp().path}${imagePath}`;
		if (!File.exists(fileLocation)) {
			this.imageSrc = '~/images/NA.png';
		}
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		let palette = ImageColors.getColorPalette(<Image>this.image.nativeElement);
		let backgroundCircle = (<Label>this.background.nativeElement);
		let page = topmost().currentPage;

		console.log(JSON.stringify(palette));

		backgroundCircle.backgroundColor = palette.color1.a > 0 ? palette.color1 : palette.color2;
		backgroundCircle.animate({
			scale: { x: 20, y: 20 },
			duration: 3700
		}).then(() => {
			page.backgroundColor = backgroundCircle.backgroundColor
		});

	}

}