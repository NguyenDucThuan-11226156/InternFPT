// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean {
    const token = this.cookieService.get('token');
    console.log(token);
    const tokenPayload = jwtDecode<any>(token); // You might need to install the jwt-decode library
    console.log("Admin")
    // Check the user's role from the token payload
    if (tokenPayload.role == 'admin' ) {
      return true;
    } else {
      // Redirect to the login page if the user's role is not allowed
      alert('You dont have permission')
      this.router.navigate(['/dashboardUser']);

      return false;
    }
  }
}


