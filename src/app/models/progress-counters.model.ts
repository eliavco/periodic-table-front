import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

export class ProgressCounter {
	private _correct: number = 0;
	private _wrong: number = 0;
	get correct(): number {
		return this._correct;
	}
	get wrong(): number {
		return this._wrong;
	}

	constructor(public readonly outOf: number) { }
	
	incrementCorrect() {
		++this._correct;
	}

	incrementWrong() {
		++this._wrong;
	}

	reset() {
		this._correct = this._wrong = 0;
	}
}
