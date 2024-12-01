import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  public user$ = this.user$$.asObservable();

  user: UserForAuth | null = null;
  userSubscription: Subscription | null = null;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
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
    return this.http.get<UserForAuth>('/api/users/profile').pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  logout() {
    return this.http
      .post('/api/users/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
