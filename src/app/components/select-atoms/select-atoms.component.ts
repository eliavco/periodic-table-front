import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atoms } from 'src/app/data/atoms';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { Atom } from 'src/app/models/atom.model';

@Component({
	selector: 'app-select-atoms',
	templateUrl: './select-atoms.component.html',
	styleUrls: ['./select-atoms.component.scss']
})
export class SelectAtomsComponent implements OnInit {
	atoms: Atoms = new Atoms(this.settings);
	filterButtons = [
		{ text: 'None', number: 0 },
		{ text: 'First 10', number: 10 },
		{ text: 'First 18', number: 18 },
		{ text: 'First 36', number: 36 },
		{ text: 'First 54', number: 54 },
		{ text: 'First 71', number: 71 },
		{ text: 'First 86', number: 86 },
		{ text: 'First 103', number: 103 },
		{ text: 'All', },
	];

	constructor(private settings: SettingsService,
		private router: Router) { }

	ngOnInit(): void {
	}

	range(length: number): number[] {
		const arr: number[] = [];
		for (let i = 0; i < length; i++) {
			arr.push(i);
		}
		return arr;
	}

	atomsData = { table: this.atoms.tableCopy, atoms: this.atoms.atoms }
	getAtom(x: number, y: number): Atom {
		let atom;
		const table = this.atomsData.table.forEach((loc, ind) => {
			if (loc[0] === x && loc[1] === y) atom = this.atomsData.atoms[ind];
		});
		return atom;
	}

	saveSettings() {
		this.settings.quizzableAtoms = this.atomsData.atoms.filter(atom => atom.selected).map(atom => atom.id);
		this.router.navigate(['/settings']);
	}

	selectFirst(n?: number): void {
		this.atomsData.atoms = this.atomsData.atoms.map((x, ind) => { x.selected = !(ind >= n); return x; });
	}

	toggleAtom(row: number, col: number): void {
		const atom = this.getAtom(row, col);
		atom.selected = !atom.selected;
	}
}
