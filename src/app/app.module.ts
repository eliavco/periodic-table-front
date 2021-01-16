import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuizesDataService } from 'src/app/data/quizes-data/quizes-data.service';
import { InjectQuizQuestionService } from 'src/app/services/inject-quiz-question/inject-quiz-question.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { QuizStartComponent } from 'src/app/components/quiz-start/quiz-start.component';
import { SelectAtomsComponent } from 'src/app/components/select-atoms/select-atoms.component';
import { AtomCardComponent } from 'src/app/components/atom-card/atom-card.component';
import { SettingsService } from 'src/app/data/settings/settings.service';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { QuizesListComponent } from 'src/app/components/quizes-list/quizes-list.component';
import { QuizDetailsComponent } from 'src/app/components/quiz-details/quiz-details.component';
import { TimerProgressComponent } from 'src/app/components/timer-progress/timer-progress.component';
import { QuizQuestionComponent } from 'src/app/components/quiz-question/quiz-question.component';
import { LocateQuestionComponent } from 'src/app/components/questions/locate-question/locate-question.component';
import { MultiChoiceQuestionComponent } from 'src/app/components/questions/multi-choice-question/multi-choice-question.component';
import { FreeTextQuestionComponent } from 'src/app/components/questions/free-text-question/free-text-question.component';
import { CanDeactivateGuard } from 'src/app/directives/can-deactivate-guard';
import { AnalyticsEventService } from 'src/app/services/analytics-event/analytics-event.service';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		QuizStartComponent,
		SelectAtomsComponent,
		AtomCardComponent,
		SettingsComponent,
		HomeComponent,
		QuizesListComponent,
		QuizDetailsComponent,
		TimerProgressComponent,
		QuizQuestionComponent,
		LocateQuestionComponent,
		MultiChoiceQuestionComponent,
		FreeTextQuestionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		FontAwesomeModule
	],
	providers: [
		SettingsService,
		QuizesDataService,
		InjectQuizQuestionService,
		AnalyticsEventService,
		CanDeactivateGuard
	],
	bootstrap: [AppComponent],
	entryComponents: [
		LocateQuestionComponent,
		MultiChoiceQuestionComponent,
		FreeTextQuestionComponent
	]
})
export class AppModule { }
