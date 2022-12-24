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
import { AuthService } from '../services/auth.service';
// import { AuthState } from '../../store/auth.state';

@Injectable()
export class AdminterceptorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = 'mytoken';
    const headers = new HttpHeaders()
      .set('access-token', token)
      .set('Authorization', 'Bearer ' + token);
    const AuthRequest = request.clone({ headers: headers });
    return next.handle(AuthRequest);
  }

  // addAuthToken(request: HttpRequest<any>) {
  //   const token = this.authService.getAuthToken();

  //   return request.clone({
  //       setHeaders: {
  //         Authorization: `Basic ${token}`
  //       }
  //   })
  // }
}
