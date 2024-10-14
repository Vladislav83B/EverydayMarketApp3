import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { MarketRoutingModule } from './market-routing.module';

@NgModule({
  declarations: [
    ProductsPageComponent,
    CategoryMenuComponent,
    CategoryMenuItemComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule
  ],
  exports: [
    ProductsPageComponent  
  ]
})
export class MarketModule { }