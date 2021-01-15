import { Component, OnInit } from '@angular/core';
import { faAward, faMedal, faTrash, faTrophy } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';

import { QuizesDataService } from 'src/app/data/quizes-data/quizes-data.service';
import { QuizMode, gameModes } from 'src/app/models/settings.model';
import { formatMilliseconds } from 'src/app/utilities/formatMiliseconds';
import { atomProperties } from 'src/app/data/atoms';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
	selector: 'app-quizes-list',
	templateUrl: './quizes-list.component.html',
	styleUrls: ['./quizes-list.component.scss']
})
export class QuizesListComponent implements OnInit {
	_quizes: Quiz[] = [];
	gameModes = gameModes;
	filterMode = QuizMode.FreeText;
	formatMilliseconds = formatMilliseconds;
	properties = atomProperties;
	get quizes(): Quiz[] {
		return _.orderBy(this._quizes.filter(x => x.mode === this.filterMode), [function (o) { return o.succeeded.length; }, 'time'], ['desc', 'asc']);
	}
	icons = {
		faTrophy: faTrophy,
		faMedal: faMedal,
		faAward: faAward,
		faTrash: faTrash
	}

	constructor(private quizesData: QuizesDataService) { }

	changeFilter(event, fil: string) {
		if (event.target.checked) {
			this.filterMode = QuizMode[fil];
		}
	}

	ngOnInit(): void {
		this.quizesData.quizes.subscribe(quizes => { this._quizes = quizes; });
	}

	getBackgroundColor(i: number): string {
		const colors = ['#FFD700', '#C0C0C0', '#8B4513'];
		let color;
		if (i < colors.length) { color = colors[i]; }
		return !!color ? `background-color:${color};` : '';
	}

	deleteQuiz(id: string) {
		this.quizesData.deleteQuiz(id);
	}
}
