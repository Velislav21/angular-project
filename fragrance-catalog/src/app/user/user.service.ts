import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { User } from '../types/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  register(payload: User){
    return this.http.post(`${this.url}/users/register`, payload)
  }
}
