import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenAuthService: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const jwtHeaderToken = this.tokenAuthService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + jwtHeaderToken,
            }
        });

    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];