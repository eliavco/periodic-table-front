import { nanoid } from 'nanoid';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { environment } from 'src/environments/environment';

import * as _ from 'lodash';

export class Quiz {
	readonly date: Date = new Date();
	readonly uid: string = nanoid();
	readonly succeeded: number[] = [];
	outOfGenerated: number[];
	time: number;
	
	constructor(
		public mode: number,
		public given: string,
		public input: string,
		public outOf: number[],
		private settings?: SettingsService
	) { 
		if (!this.settings || this.settings.generate < environment.minimumAtoms || this.settings.generate >= this.outOf.length) {
			this.outOfGenerated = this.outOf;
		} else {
			this.outOfGenerated = _.shuffle(this.outOf.slice()).slice(0, this.settings.generate);
		}
	}
}
