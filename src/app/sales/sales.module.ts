import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    SalesComponent
  ],
  exports:[
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    UserModule
  ]
})
export class SalesModule { }
