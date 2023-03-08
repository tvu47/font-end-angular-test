import { Component, OnInit } from '@angular/core';
import { ProductTest } from 'src/app/obj/ProductTest';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.scss'],
})
export class AboutsComponent implements OnInit {
  public productList!: ProductTest[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  public getAllProducts(): void {
    this.productService.getProducts().subscribe({
      next: (v) => {
        console.log(v);
        this.productList = v;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('product get all complete!');
      },
    });
  }
}
