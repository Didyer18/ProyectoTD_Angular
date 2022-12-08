import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    PagesComponent,
    CatalogueComponent,
  ],

  exports: [
  DashboardComponent,
  ProductComponent,
  CatalogueComponent,
  PagesComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    RouterModule,
  ],

})
export class PagesModule { }
