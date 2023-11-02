import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Make sure you've imported MatDialog
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component'
import { UnsuccessDialogComponent } from '../unsuccess-dialog/unsuccess-dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  email: string = '';
  password: string = '';

  confirmUsers() {
    const userData = { email: this.email, password: this.password };

    this.http.post('http://localhost:3000/success', userData).subscribe(
      (response) => {
        // Handle the response from the server (e.g., registration success or failure)
        console.log('Response:', response);

        // Assuming a successful login response is received, open the success dialog
        this.openSuccessDialog();
      },
      (error) => {
        console.error('Error:', error);
        this.openUnSuccessDialog()
      }
    );
  }

  // Function to open the success dialog
  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent);
    // Optionally, you can handle events from the dialog, such as when it's closed
  }
  
    openUnSuccessDialog(){
    const dialogRef = this.dialog.open(UnsuccessDialogComponent);
    }
  
}
