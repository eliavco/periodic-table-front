export interface QuestionMessage {
	correct: boolean;
	id: number;
}

export class QuestionFeedback {
	constructor(
		public readonly correct: boolean,
		public readonly typos: boolean,
		public readonly answered?: string,
		public readonly correctAnswer?: string,
	) {
		if (!answered) { answered = ''; }
		if (!correctAnswer) { correctAnswer = ''; }
	}
}