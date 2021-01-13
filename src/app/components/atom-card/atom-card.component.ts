import { Component, Input, OnInit } from '@angular/core';
import { Atom } from 'src/app/models/atom.model';
import { AtomicFamilies } from 'src/app/data/atomic-families';

@Component({
	selector: 'app-atom-card',
	templateUrl: './atom-card.component.html',
	styleUrls: ['./atom-card.component.scss']
})
export class AtomCardComponent implements OnInit {
	@Input() atom: Atom;
	atomicFamilies: AtomicFamilies = new AtomicFamilies();

	constructor() { }

	ngOnInit(): void {
	}

	fade(s: boolean): string {
		return s ? 'ff' : '55';
	}

}
