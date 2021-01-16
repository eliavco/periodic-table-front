import { ComponentFactoryResolver, Injectable, Inject } from '@angular/core';

import { LocateQuestionComponent } from 'src/app/components/questions/locate-question/locate-question.component';
import { MultiChoiceQuestionComponent } from 'src/app/components/questions/multi-choice-question/multi-choice-question.component';
import { FreeTextQuestionComponent } from 'src/app/components/questions/free-text-question/free-text-question.component';

@Injectable({
	providedIn: 'root'
})
export class InjectQuizQuestionService {
	factoryResolver;
	rootViewContainer;

	constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
		this.factoryResolver = factoryResolver;
	}

	setRootViewContainerRef(viewContainerRef) {
		this.rootViewContainer = viewContainerRef;
	}

	addLocateQuestionComponent() {
		const factory = this.factoryResolver
			.resolveComponentFactory(LocateQuestionComponent);
		const component = factory
			.create(this.rootViewContainer.parentInjector);
		this.rootViewContainer.insert(component.hostView);
	}
}
