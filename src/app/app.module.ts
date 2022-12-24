import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AdminterceptorInterceptor } from './interceptors/adminterceptor.interceptor';
import { AuthService } from './services/auth.service';
import { LoginComponentComponent } from './components/admin/login/login-component/login-component.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { StaffsComponent } from './components/admin/staffs/staffs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutsComponent,
    PageNotFoundComponent,
    ProductLineComponent,
    AdminHomeComponent,
    ProductsComponent,
    LoginComponentComponent,
    RegisterComponent,
    StaffsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    ProductLineService,
    AuthService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
