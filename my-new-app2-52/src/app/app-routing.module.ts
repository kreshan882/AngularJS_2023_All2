import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { LoginComponent } from './users/login/login.component';

//this is module/component data addedd(not routing Module)
const routes: Routes = [
  {path:"list_m",component:ListComponent},
  {path:"login_m",component:LoginComponent},
//lazy loading
  {path:"adminLL",loadChildren:()=>import('./admin/admin.module') 
                  .then(mod=>mod.AdminModule)
  },
  {path:"userrmLL",loadChildren:()=>import('./user-rm/user-rm.module') 
                  .then(mod=>mod.UserRmModule)
  },
];

// //this is routing Module)
// const routes: Routes = [
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
