import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { QuizesDataService } from 'src/app/data/quizes-data/quizes-data.service';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { ProgressCounter } from 'src/app/models/progress-counters.model';
import { QuestionMessage } from 'src/app/models/question-message.model';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
	selector: 'app-quiz-start',
	templateUrl: './quiz-start.component.html',
	styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
	@ViewChild('timer') timer;
	get time() {
		if (!this.timer) return 0;
		return this.timer.time;
	}
	quiz: Quiz = new Quiz(
		this.settings.currentSettings.mode,
		this.settings.currentSettings.given,
		this.settings.currentSettings.input,
		this.settings.currentSettings.quizzableAtoms);
	counters: ProgressCounter = new ProgressCounter(this.quiz.outOf.length);
	readonly questions: number[] = _.shuffle(this.quiz.outOf.slice());
	readonly completedQuestions: number[] = [];
	private readonly _questionSender = new BehaviorSubject<number>(this.questions.pop());
	readonly questionSender = this._questionSender.asObservable();

	constructor(
		private router: Router,
		private quizesData: QuizesDataService,
		private settings: SettingsService,
	) { }

	ngOnInit(): void {
		if (this.quiz.outOf.length < 5) { this.router.navigate(['settings']); }
	}

	nextQuestion({ correct, id }: QuestionMessage) {
		this.completedQuestions.push(id);
		if (correct) { this.quiz.succeeded.push(id); }
		correct ? this.counters.incrementCorrect() : this.counters.incrementWrong();
		if (this.questions.length > 0) {
			this._questionSender.next(this.questions.pop());
		} else {
			this.finishQuiz();
		}
	}

	finishQuiz(): void {
		this.quiz.time = this.time;
		this.timer.stop();
		this.quizesData.addQuiz(this.quiz);
		this.router.navigate(['history', this.quiz.uid]);
	}
}
