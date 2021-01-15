import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import _ from 'lodash';

import { Quiz } from 'src/app/models/quiz.model';
import { Atoms } from 'src/app/data/atoms';
import { Atom } from 'src/app/models/atom.model';
import { QuestionMessage } from 'src/app/models/question-message.model';

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
	readonly atoms: Atom[] = (new Atoms()).atoms;
	private curId: number;
	get currentAtom(): Atom {
		return this.atoms[this.curId-1];
	}

	constructor() { }

	ngOnInit(): void {
		this.questionSender.subscribe(nId => {
			this.startQuestion(nId);
		});
		setInterval(() => { this.nextQuestion() }, 2000);
	}

	startQuestion(id: number) {
		this.curId = id;
	}

	nextQuestion() {
		this.done.emit({ correct: _.random(0, 1)%2==0, id: this.curId });
	}

}
