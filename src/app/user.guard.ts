// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}
  canActivate(): boolean {
    const token = this.cookieService.get('token');
    const tokenPayload = jwtDecode<any>(token); 
    console.log(token)
    console.log(tokenPayload)
    // Check the user's role from the token payload
    if (tokenPayload.role == 'user'  || tokenPayload.role == 'admin') {
      return true;
    } else {
      // this.router.navigate(['/login']); // Redirect to the login page if the user's role is not allowed
      alert('You dont have permission')
      return false;
    }
  }
}
