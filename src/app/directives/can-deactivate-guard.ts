import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

import { QuizStartComponent } from 'src/app/components/quiz-start/quiz-start.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<QuizStartComponent> {
	canDeactivate(component: QuizStartComponent): boolean {

		// if (component.hasUnsavedData()) {
			if (confirm("If you leave in the middle of the quiz, it will be lost")) {
				return true;
			} else {
				return false;
			}
		// }
		// return true;
	}
}