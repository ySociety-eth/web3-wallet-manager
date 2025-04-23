import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { WalletConnectService } from './services/wallet-connect.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const authService = inject(AuthService);
  const walletConnectService = inject(WalletConnectService)
  const token = localStorageService.getToken();
  const apiUrl = "/api"

  const authReq: HttpRequest<unknown> = (token && // if token exists, clone the request and set the Authorization header
    (req.url.includes("/api/auth/nonce") || req.url.includes("/api/auth/validate")) == false // don't set the token for nonce and validate endpoints
  && req.url.startsWith(apiUrl) // only set the token for api endpoints
  )
  ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  : req; // if token does not exist, return the original request

  return next(authReq).pipe(
    catchError((error) => {
      if(error instanceof HttpErrorResponse && error.status === 401 ) {
        if(authReq.url.startsWith(apiUrl)) {
          if(walletConnectService.$walletAddress()) {
            authService.generateToken(walletConnectService.$walletAddress()!).subscribe();
          } else {
            alert("Connect your wallet through Connect Wallet");
          }
        }
      }
      return throwError(() => error);
    })
  )
};
