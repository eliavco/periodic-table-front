import { Component, OnInit } from '@angular/core';
import { QuizesDataService } from 'src/app/data/quizes-data/quizes-data.service';

import { SettingsService } from 'src/app/data/settings/settings.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
	selector: 'app-quiz-start',
	templateUrl: './quiz-start.component.html',
	styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
	constructor(private quizesData: QuizesDataService,
		private settings: SettingsService,
	) { }

	ngOnInit(): void {
		const quiz = new Quiz(
			this.settings.currentSettings.mode,
			this.settings.currentSettings.given,
			this.settings.currentSettings.input,
			this.settings.currentSettings.quizzableAtoms);
		quiz.time = 6530000;
		this.quizesData.addQuiz(quiz);
	}
}
