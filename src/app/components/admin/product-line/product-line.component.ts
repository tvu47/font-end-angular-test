import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductLine } from 'src/app/obj/ProductLine';
import { ProductLineService } from 'src/app/services/product-line.service';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.scss'],
})
export class ProductLineComponent implements OnInit {
  public productlines: ProductLine[] | undefined;
  public editproductline: ProductLine | null | undefined;

  constructor(private productLineService: ProductLineService) {}

  ngOnInit(): void {
    this.getProductLine();
  }

  public getProductLine(): void {
    this.productLineService.getProductLine().subscribe(
      (response: ProductLine[]) => {
        this.productlines = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProductL(addFrom: NgForm): void {
    document.getElementById('add-productline-form')?.click();
    this.productLineService.addProductLine(addFrom.value).subscribe({
      complete: () => {
        this.getProductLine();
      },
      error: () => {
        alert('error');
      },
    });
  }

  public onEditProductL(pro: ProductLine): void {
    document.getElementById('edit-productline-form')?.click();
    this.productLineService.editProductLine(pro).subscribe({
      complete: () => {
        this.getProductLine();
      },
      error: () => {
        alert('error');
      },
    });
  }

  public onOpenModal(productl: ProductLine | null, mode: String): void {
    const container = document.getElementById('pl-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductLineModal');
    } else if (mode === 'edit') {
      this.editproductline = productl;
      button.setAttribute('data-target', '#updateProductLineModal');
    } else if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteProductLineModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
