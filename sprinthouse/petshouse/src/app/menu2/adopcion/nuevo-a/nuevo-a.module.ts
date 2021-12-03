import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoARoutingModule } from './nuevo-a-routing.module';
import { NuevoAComponent } from './nuevo-a.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NuevoAComponent
  ],
  imports: [
    CommonModule,
    NuevoARoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NuevoAModule { }
