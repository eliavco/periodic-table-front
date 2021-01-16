import { Injectable } from '@angular/core';

// tslint:disable-next-line: ban-types
declare let gtag: Function;

@Injectable({
	providedIn: 'root'
})
export class AnalyticsEventService {

	constructor() { }

	private eventEmmiter(
		eventName: string,
		eventCategory: string,
		eventAction: string,
		eventLabel: string = null,
		eventValue: number = null): void {

		gtag('event', eventName, {
			eventCategory,
			eventLabel,
			eventAction,
			eventValue
		});
	}

	finishQuiz(grade: number): void {
		this.eventEmmiter('quiz-finish', 'quiz', 'finish', undefined, grade);
	}
}
