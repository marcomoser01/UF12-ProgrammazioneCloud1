import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibriDashboardComponent } from './libri-dashboard/libri-dashboard.component';
import { AddLibriComponent } from './add-libri/add-libri.component';

const routes: Routes = [
  { path: '', component: LibriDashboardComponent },
  { path: 'add', component: AddLibriComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibriRoutingModule { }
