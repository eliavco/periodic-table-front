export class AtomicFamilies {
	private static readonly data = {
		'Alkali metal': '#eace5d',
		'Alkaline earth metal': '#f1f165',
		'Lanthanide': '#f6d4a2',
		'Actinide': '#faccdb',
		'Transition metal': '#f4cdcd',
		'Post-transition metal': '#acdfec',
		'Metalloid': '#9ee5d4',
		'Reactive nonmetal': '#8ced8c',
		'Noble gas': '#e5bde5',
	}

	constructor() { }

	static get atomicFamilies(): string[] {
		return Object.keys(this.data);
	}

	static getColor(family: string): string {
		let familyColor = this.data[family];
		if (familyColor) return familyColor;
		return '#efefef';
	}
}
