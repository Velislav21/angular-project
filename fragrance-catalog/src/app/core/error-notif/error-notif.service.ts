import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotifService {

  private apiErrorMessage$$ = new BehaviorSubject(null);

  public apiErrorMessage$ = this.apiErrorMessage$$.asObservable();

  constructor() {}

  setError(error: any): void {
    this.apiErrorMessage$$.next(error);
  }
}
