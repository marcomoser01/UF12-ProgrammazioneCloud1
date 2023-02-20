import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersDashboardComponent } from './customers-dashboard/customers-dashboard.component';
import { CustomersDettaglioComponent } from './customers-dettaglio/customers-dettaglio.component';



@NgModule({
  declarations: [
    CustomersDashboardComponent,
    CustomersDettaglioComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
