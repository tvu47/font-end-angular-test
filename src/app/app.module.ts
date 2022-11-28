import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/clients/home/home.component';
import { AboutsComponent } from './components/clients/abouts/abouts.component';
import { PageNotFoundComponent } from './components/clients/page-not-found/page-not-found.component';
import { ProductLineComponent } from './components/admin/product-line/product-line.component';
import { ProductLineService } from './services/product-line.service';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutsComponent,
    PageNotFoundComponent,
    ProductLineComponent,
    AdminHomeComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [ProductLineService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
