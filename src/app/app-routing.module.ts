import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ProductLineComponent } from './components/admin/product-line/product-line.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { AboutsComponent } from './components/clients/abouts/abouts.component';
import { HomeComponent } from './components/clients/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutsComponent },
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      { path: 'productLine', component: ProductLineComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },
  { path: '**', component: AboutsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
