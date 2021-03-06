import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

import { HomepageComponent } from './component/homepage/homepage.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TakeOffClassComponent } from './component/take-off-class/take-off-class.component';
import { AddLessonComponent } from './component/add-lesson/add-lesson.component';
import { AddCoursbeByTeacherComponent } from './components/add-coursbe-by-teacher/add-coursbe-by-teacher.component';
import { SeeSubjectComponent } from './components/see-subject/see-subject.component';
import { ResultComponent } from './component/result/result.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'takeoffclass', component: TakeOffClassComponent },
  { path: 'addlesson', component: AddLessonComponent },
  { path: 'addCoursbeByTeacherComponent', component: AddCoursbeByTeacherComponent },
  { path: 'seeSubjectComponent', component: SeeSubjectComponent },
  { path: 'Result', component: ResultComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
