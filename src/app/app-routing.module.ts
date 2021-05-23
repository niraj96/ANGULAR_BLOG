import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {MypostComponent} from './mypost/mypost.component';
import {AddEditPostComponent} from './add-edit-post/add-edit-post.component';
import {PageComponent} from './page/page.component';
import {NotFoundPageComponent} from './404page.component';
import { LoginGuard } from './auth/login.guard';

const routes: Routes = [
  {path:'', component: UserComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[LoginGuard]},
  {path:'mypost', component: MypostComponent , canActivate:[LoginGuard]},
  {path:'add_edit/:id', component: AddEditPostComponent , canActivate:[LoginGuard]},
  {path:'view/:id', component: PageComponent , canActivate:[LoginGuard]},
  {path: 'not-found', component: NotFoundPageComponent },  
  {path: '**', redirectTo: 'not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
