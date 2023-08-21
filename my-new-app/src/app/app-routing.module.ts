import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comptutor00to20Component } from './comptutor00to20/comptutor00to20.component';
import { Comptutor21to40Component } from './comptutor21to40/comptutor21to40.component';
import { Comptutor31to40Component } from './comptutor31to40/comptutor31to40.component';

const routes: Routes = [
  { path:'tute0020', component: Comptutor00to20Component},
  { path:'tute2130', component: Comptutor21to40Component},
  { path:'tute3140', component: Comptutor31to40Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
