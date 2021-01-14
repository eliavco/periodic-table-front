import { nanoid } from 'nanoid';

export class Quiz {
	readonly date: Date = new Date();
	readonly uid: string = nanoid();
	readonly succeeded: number[] = [];
	time: number;
	
	constructor(
		public mode: number,
		public given: string,
		public input: string,
		public outOf: number[]
	) { }
}
