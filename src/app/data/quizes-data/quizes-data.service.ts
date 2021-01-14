import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from 'src/app/models/quiz.model';

@Injectable({
	providedIn: 'root'
})
export class QuizesDataService {
	private readonly initialState = localStorage.quizes ? JSON.parse(localStorage.quizes) || [] : [];
	private readonly _quizes = new BehaviorSubject<Quiz[]>(this.initialState);
	readonly quizes = this._quizes.asObservable();
	get currentQuizes(): Quiz[] {
		return this._quizes.getValue();
	}

	constructor() { }

	addQuiz(quiz: Quiz): void {
		const currentQuizes = this.currentQuizes;
		currentQuizes.push(quiz);
		this._quizes.next(currentQuizes);
		localStorage.setItem('quizes',JSON.stringify(currentQuizes));
	}

	_getQuiz(id: string): Quiz {
		const currentQuizes = this.currentQuizes.filter(x => x.uid === id);
		if (currentQuizes.length === 0) { return null; }
		return currentQuizes[0];
	}

	getQuiz(id: string): Observable<Quiz> {
		const newQuiz = new BehaviorSubject<Quiz>(this._getQuiz(id));
		this.quizes.subscribe(quizes => {
			newQuiz.next(this._getQuiz(id));
		});
		return newQuiz.asObservable();
	}

	deleteQuiz(id: string): void {
		const currentQuizes = this.currentQuizes.filter(x => x.uid !== id);
		this._quizes.next(currentQuizes);
		localStorage.setItem('quizes', JSON.stringify(currentQuizes));
	}
}
