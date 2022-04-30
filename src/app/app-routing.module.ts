import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

import { HomepageComponent } from './component/homepage/homepage.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TakeOffClassComponent } from './component/take-off-class/take-off-class.component';
import { AddLessonComponent } from './component/add-lesson/add-lesson.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'takeoffclass', component: TakeOffClassComponent },
  { path: 'addlesson', component: AddLessonComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
