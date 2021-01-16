import { TestBed } from '@angular/core/testing';

import { InjectQuizQuestionService } from './inject-quiz-question.service';

describe('InjectQuizQuestionService', () => {
	let service: InjectQuizQuestionService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(InjectQuizQuestionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
