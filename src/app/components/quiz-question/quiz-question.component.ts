import { Component, Input, Output, EventEmitter, OnInit, Inject, ViewContainerRef, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { Quiz } from 'src/app/models/quiz.model';
import { detectTypo } from 'src/app/utilities/detectTypo';
import { QuizMode } from 'src/app/models/settings.model';
import { Atoms } from 'src/app/data/atoms';
import { Atom } from 'src/app/models/atom.model';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { QuestionMessage, QuestionFeedback } from 'src/app/models/question-message.model';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-quiz-question',
	templateUrl: './quiz-question.component.html',
	styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
	@Input() questionSender: Observable<number>;
	@Input() completedQuestions: number[];
	@Input() quiz: Quiz;

	@Output() done: EventEmitter<QuestionMessage> = new EventEmitter<QuestionMessage>();

	private readonly _valueSender = new BehaviorSubject<Atom>(undefined);
	readonly valueSender = this._valueSender.asObservable();

	QuizMode = QuizMode;
	readonly atoms: Atom[] = (new Atoms()).atoms;
	private curId: number;
	get currentAtom(): Atom {
		return this.atoms[this.curId-1];
	}
	icons = {
		faCorrect: faCheckCircle,
		faWrong: faTimesCircle
	}

	feedback: QuestionFeedback;

	constructor(
		private settings: SettingsService) {
	}

	ngOnInit(): void {
		this.questionSender.subscribe(nId => {
			this.startQuestion(nId);
		});
	}

	startQuestion(id: number): void {
		this.curId = id;
		this._valueSender.next(this.currentAtom);
	}

	evaluateQuestion(input: string | number): [boolean, boolean] {
		input = `${input}`.trim().toLowerCase();
		const cAnswer = `${this.currentAtom[this.quiz.input]}`.trim().toLowerCase();
		const typo = detectTypo(input, cAnswer);
		if (cAnswer === input) { return [true, false]; }
		if (typo && this.settings.currentSettings.approveTypos) { return [true, true]; }
		return [false, false];
	}

	nextQuestion(input: string): void {
		const evaluation = this.evaluateQuestion(input);
		const feedback = new QuestionFeedback(evaluation[0], evaluation[1], input, this.currentAtom[this.quiz.input]);
		this.feedback = feedback;
		setTimeout(() => {
			if (this.feedback === feedback) {
				this.feedback = undefined;
			}
		}, 3000);
		this.done.emit({ correct: feedback.correct, id: this.curId });
	}

}
