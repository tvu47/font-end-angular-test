import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staffs } from '../obj/Staffs';

@Injectable({
  providedIn: 'root',
})
export class StaffsService {
  private apiUrlServer = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getStaffs(): Observable<Staffs[]> {
    return this.http.get<Staffs[]>(`${this.apiUrlServer}/admin/staffs/getAll`);
  }

  public getStaffByName(nameStaff: string): Observable<Staffs> {
    return this.http.get<Staffs>(
      `${this.apiUrlServer}/admin/staffs/getStaffsByName/${nameStaff}`
    );
  }

  public addStaffs(staff: Staffs): Observable<Staffs> {
    return this.http.post<Staffs>(
      `${this.apiUrlServer}/admin/staffs/add`,
      staff
    );
  }

  public editStaffs(staff: Staffs): Observable<Staffs> {
    return this.http.put<Staffs>(
      `${this.apiUrlServer}/admin/staffs/edit`,
      staff
    );
  }

  public deleteStaffs(staffId: Staffs): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrlServer}/admin/staffs/delete/${staffId}`
    );
  }
}
