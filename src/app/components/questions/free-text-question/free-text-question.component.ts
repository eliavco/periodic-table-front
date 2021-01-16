import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Atom } from 'src/app/models/atom.model';
import { Quiz } from 'src/app/models/quiz.model';
import { atomProperties } from 'src/app/data/atoms';

@Component({
	selector: 'app-free-text-question',
	templateUrl: './free-text-question.component.html',
	styleUrls: ['./free-text-question.component.scss']
})
export class FreeTextQuestionComponent implements OnInit {
	@Input() quiz: Quiz;
	@Input() value: Observable<Atom>;

	@Output() done: EventEmitter<string> = new EventEmitter<string>();

	currentAtom: Atom;

	atomProperties = atomProperties;

	inputAtom: string = '';

	constructor() { }

	ngOnInit(): void {
		this.value.subscribe(nValue => { 
			this.startQuestion(nValue);
		});
	}

	private startQuestion(nValue: Atom): void {
		this.currentAtom = nValue;
		this.inputAtom = '';
	}

	submitQuestion() {
		if (!!this.inputAtom.trim()) {
			this.done.emit(this.inputAtom);
		}
	}
}
