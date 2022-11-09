import { UserService } from './../shared/services/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: UserService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.getUsernameFromLocal === null) {
      this.router.navigate(['/welcome']);
    } else if (this.authService.getUsernameFromLocal) {
      // token expired
      this.router.navigate(['/']);
    }
    return next.handle(request);
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthInterceptorProvider = {
 provide: HTTP_INTERCEPTORS,
 useClass: AuthInterceptor,
 multi: true
};
