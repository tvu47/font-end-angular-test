import { Observable } from 'rxjs';
import { ProductLine } from './ProductLine';

export interface Products {
  idSp: number;
  idPl: {
    idPl: number;
    nameProductLine: string;
    statusLine: number;
  };
  code: string;
  nameProduct: string;
  img: string;
  quatity: number;
  priceImport: number;
  price: number;
  priceAfterDiscount: number;
  statusProduct: number;
}
