import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import * as moment from 'moment';

import { ordinalNumbers } from 'src/app/utilities/ordinalNumbers';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizesDataService } from 'src/app/data/quizes-data/quizes-data.service';
import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatMilliseconds } from 'src/app/utilities/formatMiliseconds';
import { atomProperties, Atoms } from 'src/app/data/atoms';
import { gameModes } from 'src/app/models/settings.model';

@Component({
	selector: 'app-quiz-details',
	templateUrl: './quiz-details.component.html',
	styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
	_quizes: Quiz[] = [];
	quiz: Quiz;
	icons = {
		faBack: faBackward,
		faTrash: faTrash
	};
	formatMilliseconds = formatMilliseconds;
	atomProperties = atomProperties;
	gameModes = gameModes;
	_ = _;
	ordinalNumbers = ordinalNumbers;
	atoms = new Atoms();
	get place(): number {
		return _.orderBy(this._quizes.filter(x => x.mode === this.quiz.mode), [function (o) { return o.succeeded.length; }, 'time'], ['desc', 'asc']).indexOf(this.quiz)+1;
	}

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private quizesData: QuizesDataService) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => { 
			const id = params.get('id');
			this.quizesData.getQuiz(id).subscribe(quiz => {
				this.quiz = quiz;
				this.quizesData.quizes.subscribe(quizes => {
					this._quizes = quizes;
				});
			});
		});
	}

	formatDate(date: string|Date): string {
		const ndate = new Date(date);
		const nmoment = moment(ndate.getTime());
		return nmoment.format('MMMM Do YYYY, H:mm:ss');
	}

	deleteQuiz(id: string) {
		this.quizesData.deleteQuiz(id);
		this.router.navigate(['history']);
	}

}
