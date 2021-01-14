import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizStartComponent } from 'src/app/components/quiz-start/quiz-start.component';
import { QuizDetailsComponent } from 'src/app/components/quiz-details/quiz-details.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { SelectAtomsComponent } from 'src/app/components/select-atoms/select-atoms.component';
import { QuizesListComponent } from 'src/app/components/quizes-list/quizes-list.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [

	{ path: 'settings', component: SettingsComponent },
	// Settigns pages
	{ path: 'quizzable_atoms', component: SelectAtomsComponent },

	{ path: 'history/:id', component: QuizDetailsComponent },
	{ path: 'history', component: QuizesListComponent },

	{ path: 'test', component: QuizStartComponent },

	{ path: '', component: HomeComponent },
	{ path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
