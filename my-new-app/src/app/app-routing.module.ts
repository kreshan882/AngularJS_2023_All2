import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comptutor00to20Component } from './comptutor00to20/comptutor00to20.component';
import { Comptutor21to40Component } from './comptutor21to40/comptutor21to40.component';
import { Comptutor31to40Component } from './comptutor31to40/comptutor31to40.component';
import { UserkComponent } from './userk/userk.component';
import { Comptutor41to50Component } from './comptutor41to50/comptutor41to50.component';
import { NoPage404Component } from './no-page404/no-page404.component';
import { AboutComponent } from './about/about.component';
import { AboutComponeyComponent } from './about-componey/about-componey.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path:'tute0020', component: Comptutor00to20Component},
  { path:'tute2130', component: Comptutor21to40Component},
  { path:'tute3140', component: Comptutor31to40Component},
  { path:'tute4150', component: Comptutor41to50Component},

  { path:'user/:idk', component: UserkComponent},  // dynamic routing
  { path:'tute4150/about', 
    component: AboutComponent,
    children:[
      {path:'company', component: AboutComponeyComponent},
      {path:'me', component: AboutMeComponent}
    ]} ,

  { path:'**', component: NoPage404Component}   // no page routing (wild card )

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
