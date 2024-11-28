import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();

  user: User | null = null;

  get isLoggedIn() {
    return !!this.user;
  }

  constructor(private http: HttpClient) {}

  register(email: string, name: string, password: string, rePassword: string) {
    return this.http
      .post<User>(`/api/users/register`, {
        email,
        name,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }
}
