import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { Settings, QuizMode } from 'src/app/models/settings.model';
import { AtomProperties } from 'src/app/models/atom.model';

import { Atoms } from 'src/app/data/atoms';
const atoms = new Atoms();

@Injectable({
	providedIn: 'root'
})
export class SettingsService {
	private readonly deafultState: Settings = { quizzableAtoms: atoms.getAtomsIds(), approveTypos: true, mode: QuizMode.FreeText, given: 'id', input: 'name', generate: 0 };

	private readonly initialState = _.defaults( (localStorage.settings ? JSON.parse(localStorage.settings) || {} : {}), this.deafultState);
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

	set mode(newMode: QuizMode) {
		const curSettings = this.currentSettings;
		curSettings.mode = newMode;
		this._settings.next(curSettings);
		localStorage.setItem('settings', JSON.stringify(curSettings));
	}

	set given(newValue: AtomProperties) {
		if (newValue === this.currentSettings.input) {
			this.input = this.currentSettings.given;
		}
		const curSettings = this.currentSettings;
		curSettings.given = newValue;
		this._settings.next(curSettings);
		localStorage.setItem('settings', JSON.stringify(curSettings));
	}

	set input(newValue: AtomProperties) {
		const curSettings = this.currentSettings;
		curSettings.input = newValue;
		this._settings.next(curSettings);
		localStorage.setItem('settings', JSON.stringify(curSettings));
	}

	set approveTypos(newTypo: boolean) {
		const curSettings = this.currentSettings;
		curSettings.approveTypos = newTypo;
		this._settings.next(curSettings);
		localStorage.setItem('settings', JSON.stringify(curSettings));
	}

	set generate(newGenerate: number) {
		const curSettings = this.currentSettings;
		if (newGenerate > curSettings.quizzableAtoms.length || newGenerate < 0) {
			newGenerate = 0;
		}
		curSettings.generate = newGenerate;
		this._settings.next(curSettings);
		localStorage.setItem('settings', JSON.stringify(curSettings));
	}

	get generate(): number {
		const curGenerate = this.currentSettings.generate;
		if (curGenerate > this.currentSettings.quizzableAtoms.length || curGenerate < 0) {
			return 0;
		} else {
			return curGenerate;
		}
	}
}
