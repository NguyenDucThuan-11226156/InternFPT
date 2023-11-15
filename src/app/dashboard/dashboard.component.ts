import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUserId: string | undefined;
  arraylist: any[] = [];
  isAdmin: boolean = false;
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {}
  ngOnInit(): void {
    const token = this.cookieService.get('token');
    const tokenPayload = jwtDecode<any>(token);
    this.currentUserId = tokenPayload._id;
    this.isAdmin = this.checkAdmin();
    this.getUsers();
  }
  checkAdmin(): boolean {
    const token = this.cookieService.get('token');
    const tokenPayload = jwtDecode<any>(token);
    return tokenPayload.role === 'admin';
  }
  logOut():void{
    sessionStorage.clear();
    this.cookieService.deleteAll();
    this.router.navigate(['/login'])

  }
  getUsers(): void {
    this.http.get<any[]>('http://localhost:3000/getApi').subscribe(
      (response) => {
        this.arraylist = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  deleteUser(id: string): void {
    if(confirm('Are you sure to delete'))
    {
      this.http.delete(`http://localhost:3000/deleteUser/${id}`).subscribe(
        () => {
          console.log('User deleted successfully');
          this.arraylist = this.arraylist.filter((user) => user._id !== id);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
    else{
    }
  }
  updateUser(id: string, data: any): void {
    this.http.put(`http://localhost:3000/updateUser/${id}`, data).subscribe(
      () => {
        console.log('User updated successfully');
        this.getUsers();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
