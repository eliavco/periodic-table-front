import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Atom } from 'src/app/models/atom.model';
import { Quiz } from 'src/app/models/quiz.model';
import { atomProperties, Atoms } from 'src/app/data/atoms';
import { arrayRange } from 'src/app/utilities/arrayRange';

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

	atomProperties = atomProperties;
	atoms: Atoms = new Atoms();
	range = arrayRange;

	constructor() { }

	ngOnInit(): void {
		this.value.subscribe(nValue => {
			this.startQuestion(nValue);
		});
	}

	private startQuestion(nValue: Atom): void {
		this.currentAtom = nValue;
	}

	isSelected(atom: Atom): Atom {
		return this.completed.includes(atom.id) ? { ...atom, selected: false } : { ...atom, selected: true };
	}

	submitQuestion(id: number, input: string): void {
		if (!!this.quiz.outOf.includes(id) && !this.completed.includes(id)) {
			this.done.emit(input);
		}
	}

}
