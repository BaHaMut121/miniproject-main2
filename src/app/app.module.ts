import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
/* Components */
import { LoginComponent } from './component/login/login.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TakeOffClassComponent } from './component/take-off-class/take-off-class.component';
import { AddLessonComponent } from './component/add-lesson/add-lesson.component';
import { MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-ups/pop-up/pop-up.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCoursbeByTeacherComponent } from './components/add-coursbe-by-teacher/add-coursbe-by-teacher.component';
import { SeeSubjectComponent } from './components/see-subject/see-subject.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    TakeOffClassComponent,
    AddLessonComponent,
    PopUpComponent,
    AddCoursbeByTeacherComponent,
    SeeSubjectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopUpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
