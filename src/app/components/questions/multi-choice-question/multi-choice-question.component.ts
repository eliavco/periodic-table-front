import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Atom } from 'src/app/models/atom.model';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
	selector: 'app-multi-choice-question',
	templateUrl: './multi-choice-question.component.html',
	styleUrls: ['./multi-choice-question.component.scss']
})
export class MultiChoiceQuestionComponent implements OnInit {
	@Input() quiz: Quiz;
	@Input() value: Observable<Atom>;

	@Output() done: EventEmitter<string> = new EventEmitter<string>();

	currentAtom: Atom;

	constructor() { }

	ngOnInit(): void {
		this.value.subscribe(nValue => {
			this.startQuestion(nValue);
		});
	}

	private startQuestion(nValue: Atom): void {
		this.currentAtom = nValue;
	}

}
