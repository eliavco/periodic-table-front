import { Identifiers } from "@angular/compiler";

export interface Atom {
	name: string;
	id: number;
	symbol: string;
	group: string;
	weight?: string;
}
