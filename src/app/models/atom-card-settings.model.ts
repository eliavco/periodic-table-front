export interface AtomCardSettings {
	fit?: boolean;
	big?: boolean;
	display?: {
		name?: boolean;
		id: boolean;
		symbol: boolean;
		group?: boolean;
		weight?: boolean;
	};
	displayWhat?: string;
}