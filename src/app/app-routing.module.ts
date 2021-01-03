import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizStartComponent } from 'src/app/components/quiz-start/quiz-start.component';

const routes: Routes = [
	{ path: '', component: QuizStartComponent },
	{ path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
