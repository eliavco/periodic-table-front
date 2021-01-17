import { nanoid } from 'nanoid';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { environment } from 'src/environments/environment';

import * as _ from 'lodash';

export class Quiz {
	readonly date: Date = new Date();
	readonly uid: string = nanoid();
	readonly succeeded: number[] = [];
	get outOfGenerated(): number[] {
		if (!this.settings || this.settings.generate < environment.minimumAtoms || this.settings.generate >= this.outOf.length) {
			return this.outOf;
		} else {
			return _.shuffle(this.outOf.slice()).slice(0, this.settings.generate);
		}
	}
	time: number;
	
	constructor(
		public mode: number,
		public given: string,
		public input: string,
		public outOf: number[],
		private settings?: SettingsService
	) { }
}
