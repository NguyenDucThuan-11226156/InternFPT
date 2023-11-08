import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { WeatherComponent } from "./weather/weather.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { DashboardUserComponent } from "./dashboard-user/dashboard-user.component";
const routes: Routes = [ // Use a colon (:) to declare the type of 'routes'
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'weather', component: WeatherComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboardUser', component: DashboardUserComponent },
    { path: 'user/:id', component: EditUserComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }



