import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDashboardComponent } from './customers-dashboard/customers-dashboard.component';
import { CustomersDettaglioComponent } from './customers-dettaglio/customers-dettaglio.component';

const routes: Routes = [
  { path: '', component: CustomersDashboardComponent },
  { path: 'dettaglio', component: CustomersDettaglioComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
