import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import * as _ from 'lodash';

import { Atom } from 'src/app/models/atom.model';
import { Quiz } from 'src/app/models/quiz.model';
import { atomProperties, Atoms } from 'src/app/data/atoms';

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

	atomProperties = atomProperties;
	allAtoms: Atom[] = (new Atoms()).atoms;

	possibleAnswers: Atom[];

	constructor() { }

	ngOnInit(): void {
		this.value.subscribe(nValue => {
			this.startQuestion(nValue);
		});
	}

	private startQuestion(nValue: Atom): void {
		this.currentAtom = nValue;
		this.createPossibleAnswers();
	}

	private createPossibleAnswers(): void {
		const allowed = this.quiz.outOf.slice();
		const allowedAtoms = _.shuffle(this.allAtoms.filter(atom => allowed.includes(atom.id) && atom.id !== this.currentAtom.id));
		const possibleAnswers = allowedAtoms.length > 9 ? allowedAtoms.slice(0, 9) : allowedAtoms;
		this.possibleAnswers = _.shuffle([...possibleAnswers, this.currentAtom]);
	}

	submitQuestion(input: string): void {
		this.done.emit(input);
	}

}
