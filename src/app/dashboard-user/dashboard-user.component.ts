import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {
  arraylist: any = []; // Declare as an array of any
  constructor(private https: HttpClient) {}
  getUsers() {
    this.https.get('http://localhost:3000/getApi').subscribe(
      (response: any) => { // Specify the type as an array of any
        this.arraylist = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  // updateUser(id1: string, data: any) {
  //   this.https.put(`http://localhost:3000/updateUser/${id1}`, data).subscribe(
  //     (response: any) => {
  //       console.log('Success update');
  //       this.getUsers();
  //     },
  //     (error: any) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
}
