import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/post-list',  // default call-view list
    pathMatch: 'full',
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'post-add',
    component: PostEditComponent,
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent,
  },
];

//decorator @NgModule make this as MODULE
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],   // can add module level services
  bootstrap: [AppComponent],
})
export class AppModule {}
