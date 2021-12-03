import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoMRoutingModule } from './nuevo-m-routing.module';
import { NuevoMComponent } from './nuevo-m.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NuevoMComponent
  ],
  imports: [
    CommonModule,
    NuevoMRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NuevoMModule { }
