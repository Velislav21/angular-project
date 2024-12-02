import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotifService {

  private apiErrorMessage$$ = new BehaviorSubject<string | null>(null);

  public apiErrorMessage$ = this.apiErrorMessage$$.asObservable();

  constructor() {}

  setError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.apiErrorMessage$$.next(error.error.message);
    } else if (error instanceof Error) {
      this.apiErrorMessage$$.next(error.message);
    } else {
      this.apiErrorMessage$$.next('Something is wrong!')
    }
  }
}
