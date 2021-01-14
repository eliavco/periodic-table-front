import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizStartComponent } from 'src/app/components/quiz-start/quiz-start.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { SelectAtomsComponent } from 'src/app/components/select-atoms/select-atoms.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [

	{ path: 'settings', component: SettingsComponent },
	// Settigns pages
	{ path: 'quizzable_atoms', component: SelectAtomsComponent },

	{ path: 'test', component: QuizStartComponent },

	{ path: '', component: HomeComponent },
	{ path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
