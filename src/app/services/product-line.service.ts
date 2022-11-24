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

const httpOptionsPlain = {
  headers: new HttpHeaders({
    Accept: 'text/plain',
    'Content-Type': 'text/plain',
  }),
  responseType: 'arraybuffer',
};

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
  public deleteProductLine(productline: ProductLine): Observable<ProductLine> {
    return this.http.post<ProductLine>(
      `${this.apiServerUrl}/admin/productLine/add-product-line`,
      productline
    );
  }
}
