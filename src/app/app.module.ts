import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GradesComponent } from './grades/grades.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseDetailsComponent,
    UserDetailsComponent,
    GradesComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user-details', component: UserDetailsComponent},
      { path: 'course-details', component: CourseDetailsComponent},
      { path: 'grades', component: GradesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
