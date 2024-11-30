import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  public user$ = this.user$$.asObservable();

  user: UserForAuth | null = null;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  register(email: string, name: string, password: string, rePassword: string) {
    return this.http
      .post<UserForAuth>(`/api/users/register`, {
        email,
        name,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }
  getProfile() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }


  logout() {
    return this.http
      .post('/api/users/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
  }
}
