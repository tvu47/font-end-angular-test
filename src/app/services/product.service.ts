import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../obj/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAllProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/admin/get-list-products`);
  }

  public getProductByName(keyword: String): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.apiUrl}/admin/products/findByName?keyword=${keyword}`
    );
  }

  public getProductByIdpl(id: number): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.apiUrl}/admin/products/findByIdPl?category=${id}`
    );
  }

  public getProductsBySoftPrice(soft: number): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.apiUrl}/admin/products/filterAllProduct?soft=${soft}`
    );
  }

  public getProductByIdPlSoft(
    soft: number,
    id: number
  ): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.apiUrl}/admin/products/filter?soft=${soft}&&category=${id}`
    );
  }

  public addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(
      `${this.apiUrl}/admin/products/add`,
      product
    );
  }

  public updateProduct(editpro: Products): Observable<Products> {
    return this.http.put<Products>(
      `${this.apiUrl}/admin/products/edit`,
      editpro
    );
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/admin/products/delete/${id}`);
  }
}
