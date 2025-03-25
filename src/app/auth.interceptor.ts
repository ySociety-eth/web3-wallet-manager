import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getToken();
  let authReq: HttpRequest<unknown>;

  if(token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` 
      }
    })
    return next(authReq);
  } else {
    return next(req);
  }
};
