import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private apiUrl:string = 'http://localhost:8000'; 

  onLogin(){
    return this.http.get(`${this.apiUrl}/login`);
  }
}
