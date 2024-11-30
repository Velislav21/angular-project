import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environments';

const { apiUrl } = environment
const API = '/api'
export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,
    })
  }

  return next(req);
};
