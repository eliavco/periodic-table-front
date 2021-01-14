export type AtomProperties = 'name' | 'id' | 'symbol' | 'group' | 'weight';

export interface Atom {
	name: string;
	id: number;
	symbol: string;
	group: string;
	weight?: string;
	selected?: boolean;
}
