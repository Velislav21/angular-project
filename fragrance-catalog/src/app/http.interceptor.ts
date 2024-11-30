import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environments';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorNotifService } from './core/error-notif/error-notif.service';
import { Router } from '@angular/router';

const { apiUrl } = environment;
const API = '/api';
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,
    });
  }

  const errorService = inject(ErrorNotifService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {

      if (err.status === 401) {
        router.navigate(['/home']);

      } 
      else {
        errorService.setError(err);
        router.navigate(['/error'])
      }

      return [err];
    })
  );
};
