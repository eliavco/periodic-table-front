import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateQuestionComponent } from './locate-question.component';

describe('LocateQuestionComponent', () => {
	let component: LocateQuestionComponent;
	let fixture: ComponentFixture<LocateQuestionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LocateQuestionComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LocateQuestionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
