import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { UnsuccessDialogComponent } from '../unsuccess-dialog/unsuccess-dialog.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
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

export class LoginComponent implements  OnInit {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    console.log('ngOnInit is called.');
    console.log('checking storage');
    const encryptedEmail = sessionStorage.getItem('email');
    const encryptedPassword = sessionStorage.getItem('password');
    const check = this.cookieService.get('token')
    if (encryptedEmail && encryptedPassword || check) {
      this.router.navigate(['/dashboardUser']);
    }
  }
  email: any = '';
  password: any = '';
  secretKey: any = 'YourSecretKey'; 
  confirmUsers() {
    const userData = { email: this.email, password: this.password };
    this.http.post<LoginResponse>('http://localhost:3000/login', userData).subscribe(
      (response) => {
        console.log('response:', response);
        let token = response.token;
        this.cookieService.set('token', token);
        const encryptedEmail = CryptoJS.AES.encrypt(this.email, this.secretKey).toString();
        const encryptedPassword = CryptoJS.AES.encrypt(this.password, this.secretKey).toString();
        sessionStorage.setItem('email', encryptedEmail);
        sessionStorage.setItem('password', encryptedPassword);
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
  // Helper function to decrypt values from sessionStorage
  decryptFromSessionStorage(key: string): string {
    const encryptedValue = sessionStorage.getItem(key);
    if (encryptedValue) {
      const decryptedValue = CryptoJS.AES.decrypt(encryptedValue, this.secretKey).toString(CryptoJS.enc.Utf8);
      return decryptedValue;
    }
    return '';
  }
}
