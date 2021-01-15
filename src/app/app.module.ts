import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
	providers: [
	  SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
