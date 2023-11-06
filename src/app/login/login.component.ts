import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { UnsuccessDialogComponent } from '../unsuccess-dialog/unsuccess-dialog.component';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {}

  email: string = '';
  password: string = '';

   confirmUsers() {
    const userData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/success', userData).subscribe(
       (response) => {
        console.log('Response:', response);
         this.openSuccessDialog();
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error:', error);
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
