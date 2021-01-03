import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { SelectAtomsComponent } from './components/select-atoms/select-atoms.component';
import { AtomCardComponent } from './components/atom-card/atom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizStartComponent,
    SelectAtomsComponent,
    AtomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
