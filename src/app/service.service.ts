import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { 

  }
  sendUserData(username: string, password: string) {
    const data = { username, password };
    return this.httpClient.post('http://localhost:3000/register', data)
  }
}
