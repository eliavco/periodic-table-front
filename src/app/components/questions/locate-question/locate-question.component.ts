import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Atom } from 'src/app/models/atom.model';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
	selector: 'app-locate-question',
	templateUrl: './locate-question.component.html',
	styleUrls: ['./locate-question.component.scss']
})
export class LocateQuestionComponent implements OnInit {
	@Input() quiz: Quiz;
	@Input() value: Observable<Atom>;
	@Input() completed: number[];

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
