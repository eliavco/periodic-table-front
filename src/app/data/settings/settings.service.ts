import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Settings } from 'src/app/models/settings.model';

import { Atoms } from 'src/app/data/atoms';
const atoms = new Atoms();

@Injectable({
	providedIn: 'root'
})
export class SettingsService {
	private readonly deafultState: Settings = { quizzableAtoms: atoms.getAtomsIds() };

	private readonly initialState = localStorage.settings ? JSON.parse(localStorage.settings) || this.deafultState : this.deafultState;
	// tslint:disable-next-line: variable-name
	private readonly _settings = new BehaviorSubject<Settings>(this.initialState);
	readonly settings = this._settings.asObservable();
	get currentSettings(): Settings {
		return this._settings.getValue();
	}
	get quizzableAtoms(): number[] {
		const curSettings = this.currentSettings;
		return curSettings.quizzableAtoms ? curSettings.quizzableAtoms : [];
	}

	constructor() { }

	set quizzableAtoms(newAtoms: number[]) {
		const curSettings = this.currentSettings;
		curSettings.quizzableAtoms = newAtoms;
		this._settings.next(curSettings);
		localStorage.setItem('settings', JSON.stringify(curSettings));
	}
}
