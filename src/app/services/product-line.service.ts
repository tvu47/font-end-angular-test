import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductLine } from '../obj/ProductLine';

@Injectable({
  providedIn: 'root',
})
export class ProductLineService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getProductLine(): Observable<ProductLine[]> {
    return this.http.get<ProductLine[]>(
      `${this.apiServerUrl}/list-product-line`
    );
  }

  public getProductLineById(id: number): Observable<ProductLine> {
    return this.http.get<ProductLine>(
      `${this.apiServerUrl}/admin/productLine/findProductLineByID/${id}`
    );
  }

  public addProductLine(productline: ProductLine): Observable<ProductLine> {
    return this.http.post<ProductLine>(
      `${this.apiServerUrl}/admin/productLine/add-product-line`,
      productline
    );
  }

  public editProductLine(productline: ProductLine): Observable<ProductLine> {
    return this.http.put<ProductLine>(
      `${this.apiServerUrl}/admin/productLine/update-product-line`,
      productline
    );
  }

  public deleteProductLine(productlineId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/admin/productLine/delete/${productlineId}`
    );
  }
}
