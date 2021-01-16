import { Component, Input, OnInit } from '@angular/core';
import { Atom } from 'src/app/models/atom.model';
import { AtomicFamilies } from 'src/app/data/atomic-families';
import { AtomCardSettings } from 'src/app/models/atom-card-settings.model';

@Component({
	selector: 'app-atom-card',
	templateUrl: './atom-card.component.html',
	styleUrls: ['./atom-card.component.scss']
})
export class AtomCardComponent implements OnInit {
	@Input() atom: Atom;
	@Input() settings: AtomCardSettings;
	atomicFamilies = AtomicFamilies;

	constructor() { }

	ngOnInit(): void {
	}

	fade(s: boolean): string {
		return s ? 'ff' : '55';
	}

}
