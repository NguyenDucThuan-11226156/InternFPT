import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { UnsuccessDialogComponent } from '../unsuccess-dialog/unsuccess-dialog.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// Define an interface for the response structure
interface LoginResponse {
  message: string;
  token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');
    this.password = sessionStorage.getItem('password');
  }
  
  email: any = '';
  password: any = '';

  confirmUsers() {
    const userData = { email: this.email, password: this.password };
    this.http.post<LoginResponse>('http://localhost:3000/login', userData).subscribe(
      (response) => {
        // console.log('response:', response);
        let token = response.token;
        this.cookieService.set('token', token);
        // Save email and password to sessionStorage
        sessionStorage.setItem('email', this.email);
        sessionStorage.setItem('password', this.password);
        this.openSuccessDialog();
        this.router.navigate(['/dashboardUser']);
      },
      (error) => {
        console.error('Error as User:', error);
        this.openUnSuccessDialog();
      }
    );
  }
  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent);
  }

  openUnSuccessDialog() {
    const dialogRef = this.dialog.open(UnsuccessDialogComponent);
  }
}
