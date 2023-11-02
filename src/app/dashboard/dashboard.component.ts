import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  arraylist: any = []; // Declare as an array of any
  constructor(private https: HttpClient) {}
  getUsers() {
    this.https.get('http://localhost:3000/getApi').subscribe(
      (response) => { // Specify the type as an array of any
        this.arraylist = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  deleteUser(id: string) {
    this.https.delete(`http://localhost:3000/deleteUser/${id}`).subscribe(
      (response: any) => {
        console.log('User deleted successfully:', response);
        // Refresh the user list after successful deletion
        // this.getUsers();
        this.arraylist = this.arraylist.filter((user: any) => user._id !== id);
      },
      (error) => {
        // console.error('Error:', error);
      }
    );
  }
  updateUser(id1: string, data: any) {
    this.https.put(`http://localhost:3000/updateUser/${id1}`, data).subscribe(
      (response) => {
        console.log('Success update');
        this.getUsers();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
}
