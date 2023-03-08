import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductTest } from '../obj/ProductTest';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductTest[]> {
    return this.http.get<ProductTest[]>(`${this.apiUrl}/api/v1/products`);
  }
}
