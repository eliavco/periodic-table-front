import { AtomProperties } from './atom.model';
export enum QuizMode {
	Locate,
	Multichoice,
	FreeText
}
const enumGameModes = Object.values(QuizMode)
export const gameModes = enumGameModes.slice(0, enumGameModes.length/2);

export interface Settings {
	quizzableAtoms: number[];
	mode: number;
	given: AtomProperties;
	generate: number;
	input: AtomProperties;
	approveTypos: boolean
}
