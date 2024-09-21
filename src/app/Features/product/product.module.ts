import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../Components/product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProducRoutingModule
  ]
})
export class ProducModule { }
