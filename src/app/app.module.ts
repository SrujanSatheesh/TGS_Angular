import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestionsHomeComponent } from './components/questions-home/questions-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultComponent } from './components/result/result.component';
import { TimerComponent } from './components/timer/timer.component';

import { TestService } from './services/test.service';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { HttpClientModule } from '@angular/common/http';
import { ReviewAnswersComponent } from './components/review-answers/review-answers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsHomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResultComponent,
    TimerComponent,
    UserHomeComponent,
    ReviewAnswersComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }), NgbModule, 
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
