import { TestBed } from '@angular/core/testing';

import { QuizesDataService } from './quizes-data.service';

describe('QuizesDataService', () => {
	let service: QuizesDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(QuizesDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
