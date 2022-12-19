import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Q1Component } from './body/q1/q1.component';
import { Q2Component } from './body/q2/q2.component';
import { Q3Component } from './body/q3/q3.component';
import { Q4Component } from './body/q4/q4.component';

const routes: Routes = [
  { path: 'Q1', component: Q1Component},
  { path: 'Q2', component: Q2Component},
  { path: 'Q3', component: Q3Component},
  { path: 'Q4', component: Q4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
