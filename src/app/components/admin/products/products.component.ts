import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductLine } from 'src/app/obj/ProductLine';
import { Products } from 'src/app/obj/Products';
import { ProductLineService } from 'src/app/services/product-line.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productList!: Products[];
  public productL!: ProductLine[];
  public editProd!: Products | null;
  public deleteProd!: Products | null;
  public p: number = 1;
  public keyword!: string;
  public categoryId: number = 0;
  public softMode: number = 0;

  constructor(
    private productService: ProductService,
    private productlineSer: ProductLineService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllProductsLine();
  }

  public getAllProducts(): void {
    this.productService.getAllProduct().subscribe({
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

  public getAllProductsLine(): void {
    this.productlineSer.getProductLine().subscribe({
      next: (v) => {
        console.log(v);
        this.productL = v;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  public getProductsByName(): void {
    this.productService.getProductByName(this.keyword).subscribe({
      next: (v) => {
        console.log(v);
        this.productList = v;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  public getProductsByIdpl(): void {
    if (this.categoryId == 0) {
      this.getAllProducts();
    } else {
      this.productService.getProductByIdpl(this.categoryId).subscribe({
        next: (v) => {
          console.log(v);
          this.productList = v;
        },
        error: (e) => {
          console.error(e);
        },
      });
    }
  }

  public getAllProductsBySoft(): void {
    this.productService.getProductsBySoftPrice(this.softMode).subscribe({
      next: (v) => {
        console.log(v);
        this.productList = v;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  public getAllProductsBySoftAndProl(): void {
    this.productService
      .getProductByIdPlSoft(this.softMode, this.categoryId)
      .subscribe({
        next: (v) => {
          console.log(v);
          this.productList = v;
        },
        error: (e) => {
          console.error(e);
        },
      });
  }

  public onAddProduct(addFrom: NgForm): void {
    document.getElementById('cancel-add-product-form')?.click();
    this.productService.addProduct(addFrom.value).subscribe({
      next: (n) => {
        console.log(n);
        this.getAllProducts();
        addFrom.reset();
      },
      error: (e) => {
        console.error(e);
        addFrom.reset();
      },
    });
  }

  public onEditProducts(pro: Products): void {
    document.getElementById('cancel-edit-product-form')?.click();
    this.productService.updateProduct(pro).subscribe({
      next: (v) => {
        console.log(v);
        this.getAllProducts();
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  public onDeleteProducts(id: number): void {
    document.getElementById('cancel-delete-product-form')?.click();
    this.productService.deleteProduct(id).subscribe({
      next: (v) => {
        console.log(v);
        this.getAllProducts();
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  public onOpenModal(product: Products | null, modal: string): void {
    const container = document.getElementById('product-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (modal === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    } else if (modal === 'edit') {
      this.editProd = product;
      button.setAttribute('data-target', '#editProductModal');
    } else if (modal === 'delete') {
      this.deleteProd = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
