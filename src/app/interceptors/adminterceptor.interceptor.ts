import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
// import { AuthState } from '../../store/auth.state';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AdminterceptorInterceptor implements HttpInterceptor {
  constructor(private cookie: CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders();

    if (!token) {
      console.log('token undefined, ', token);
      const AuthRequest = request.clone({ headers: headers });
      return next.handle(AuthRequest);
    }
    console.log('give token from cookie, ', token);
    headers.set('Authorization', 'Bearer ' + token);
    const AuthRequest = request.clone({ headers: headers });
    return next.handle(AuthRequest);
  }
}
