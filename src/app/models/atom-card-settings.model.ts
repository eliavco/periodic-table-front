export interface AtomCardSettings {
	fit?: boolean;
	big?: boolean;
	break?: boolean;
	transparent?: boolean;
	display?: {
		name?: boolean;
		id: boolean;
		symbol: boolean;
		group?: boolean;
		weight?: boolean;
	};
	displayWhat?: string;
}