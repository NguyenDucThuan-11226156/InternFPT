// auth.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  isAdmin(): boolean {
    const token = this.cookieService.get('token');
    // Check the token to determine if the user is an admin
    // You can use the JwtHelperService or manually decode the token here
    return true; // Replace with your logic
  }

  isUser(): boolean {
    const token = this.cookieService.get('token');
    // Check the token to determine if the user is a regular user
    // You can use the JwtHelperService or manually decode the token here
    return true; // Replace with your logic
  }
}
