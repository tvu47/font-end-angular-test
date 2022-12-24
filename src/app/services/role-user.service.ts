import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../obj/Roles';

@Injectable({
  providedIn: 'root',
})
export class RoleUserService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getAllRole(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.apiUrl}/admin/roles/getAll`);
  }
}
