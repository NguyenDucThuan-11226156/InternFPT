import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ToggleComponent } from './toggle/toggle.component';
import { WeatherComponent } from './weather/weather.component';
import { TimeComponent } from './time/time.component';
import { FormComponent }from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WeatherService } from './weather/weather.service';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnsuccessDialogComponent } from './unsuccess-dialog/unsuccess-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditSuccessComponent } from './edit-success/edit-success.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AuthService } from './auth.service';
import { UserGuard } from './authentication/user.guard';
import { AdminGuard } from './authentication/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ToggleComponent,
    WeatherComponent,
    TimeComponent,
    FormComponent,
    LoginComponent,
    SignupComponent,
    SuccessDialogComponent,
    UnsuccessDialogComponent,
    DashboardComponent,
    EditUserComponent,
    EditSuccessComponent,
    SuccessLoginComponent,
    DashboardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [WeatherService,AuthService,UserGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
