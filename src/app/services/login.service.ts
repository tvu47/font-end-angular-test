import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../obj/AuthenticationToken';
import { Staffs } from '../obj/Staffs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public onlogin(users: UsernameAndPasswd): Observable<Token> {
    return this.http.post<Token>(
      `${this.apiServerUrl}/api/v1/auth/login`,
      users
    );
  }
}

export interface UsernameAndPasswd {
  username: string;
  password: string;
}
