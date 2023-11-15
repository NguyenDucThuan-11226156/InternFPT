import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { SuccessLoginComponent } from '../success-login/success-login.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: any = '';
  username: any = '';
  password: any = '';
  constructor(private http: HttpClient, private fb: FormBuilder, private dialog:MatDialog, private router:Router) {}
  infoUser = this.fb.group({
    "username":[""],
    "email":["",[Validators.email,Validators.required]],
    "password1":[""],
    "password2":[""],
  })
  get f()
  {
    return this.infoUser.controls;
  }
  postUsers() {
    this.email = this.infoUser.get('email')?.value || '';
    this.username = this.infoUser.get('username')?.value || '';
    this.password = this.infoUser.get('password1')?.value || '';
    const userData = { email:this.email , username: this.username, password: this.password };
    this.http.post('http://localhost:3000/register', userData).subscribe(
      (response) => {
        // Handle the response from the server (e.g., registration success or failure)
        
        console.log('Response:', response);
        this.openSuccessRegisterDialog();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  openSuccessRegisterDialog() {
    // const dialogRef = this.dialog.open(LoginComponent);
    this.router.navigate(['/login'])
    // Optionally, you can handle events from the dialog, such as when it's closed
  }

  

}