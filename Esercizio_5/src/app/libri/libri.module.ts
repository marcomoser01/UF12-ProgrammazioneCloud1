import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LibriRoutingModule } from './libri-routing.module';
import { LibriDashboardComponent } from './libri-dashboard/libri-dashboard.component';
import { AddLibriComponent } from './add-libri/add-libri.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    LibriDashboardComponent,
    AddLibriComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LibriRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ], 
  providers: [],
  bootstrap: [LibriDashboardComponent]
})
export class LibriModule { }
