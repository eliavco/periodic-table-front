import * as Typo from 'typo-js';
import * as _ from 'lodash';

// dictionaries/en_US/en_US.dic
const dictionary = new Typo('en_US');

export const detectTypo = (mispelled: string, original: string): boolean => {
	const suggs = dictionary.suggest(mispelled).map(x => x.trim().toLowerCase());
	return _.includes(suggs, original);
}