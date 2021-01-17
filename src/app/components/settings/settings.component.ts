import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { gameModes, QuizMode, Settings } from 'src/app/models/settings.model';
import { AtomProperties } from 'src/app/models/atom.model';
import { atomProperties } from 'src/app/data/atoms';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	icons = { faExternal: faExternalLinkAlt };
	gameModes = gameModes;
	properties = atomProperties;
	minimumAtoms = environment.minimumAtoms;
	Object = Object;
	get given(): AtomProperties {
		return this.settings.currentSettings.given;
	}
	get input(): AtomProperties {
		return this.settings.currentSettings.input;
	}
	get typos(): boolean {
		return this.settings.currentSettings.approveTypos;
	}
	get mode(): string {
		return QuizMode[this.settings.currentSettings.mode];
	}
	get numQuizzableAtoms(): number {
		return this.settings.currentSettings.quizzableAtoms.length;
	}
	get generate(): number {
		return this.settings.currentSettings.generate;
	}
	canChangeGenerate = this.generate !== 0;
	newSettings = {
		given: this.given,
		input: this.input,
		typos: this.typos,
		generate: this.generate,
		mode: this.mode
	};

	constructor(
		private titleService: Title,
		private settings: SettingsService) { }

	ngOnInit(): void { 
		this.titleService.setTitle(`${environment.baseName} | Settings`);
	}

	givenChange(): void {
		this.settings.given = this.newSettings.given;
	}
	
	inputChange(): void {
		this.settings.input = this.newSettings.input;
	}

	typosChange(): void {
		this.settings.approveTypos = `${this.newSettings.typos}` == 'true';
	}

	modeChange(): void {
		this.settings.mode = QuizMode[this.newSettings.mode];
	}
	
	generateChange(event?): void {
		if (!!event && this.canChangeGenerate) {
			const newValue = event.srcElement.value;
			this.settings.generate = +newValue;
		} else {
			if (!event) {
				this.settings.generate = this.canChangeGenerate ? this.minimumAtoms : 0;
			} else {
				this.settings.generate = 0;
			}
		}
	}

	filterGroup(arr: string[]): string[] {
		return arr.filter(x => x !== 'group').filter(x => x !== 'Atomic Family');
	}
}
