import { Component, OnInit } from '@angular/core';
import { Atom } from 'src/app/models/atom.model';
import { Atoms } from 'src/app/data/atoms';

@Component({
	selector: 'app-quiz-start',
	templateUrl: './quiz-start.component.html',
	styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
	atoms: Atoms = new Atoms();

	constructor() { }

	ngOnInit(): void {
	}

	range(length: number): number[] {
		const arr: number[] = [];
		for (let i = 0; i < length; i++) {
			arr.push(i);
		}
		return arr;
	}
}
