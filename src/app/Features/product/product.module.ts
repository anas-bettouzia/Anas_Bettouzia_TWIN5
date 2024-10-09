import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../Components/product/product.component';
import { FilterProductPipe } from '../../pipe/filter-product.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ProducRoutingModule,

  ]
})
export class ProducModule { }
