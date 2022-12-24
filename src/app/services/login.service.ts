import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staffs } from '../obj/Staffs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public onlogin(users: UsernameAndPasswd): Observable<Staffs> {
    const params = new HttpParams({
      fromObject: {
        username: users.username,
        password: users.password,
      },
    });
    return this.http.post<Staffs>(`${this.apiServerUrl}/api/login`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
}

export interface UsernameAndPasswd {
  username: string;
  password: string;
}
