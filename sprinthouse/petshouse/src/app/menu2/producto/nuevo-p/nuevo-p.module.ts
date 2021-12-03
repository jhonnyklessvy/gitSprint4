import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoPRoutingModule } from './nuevo-p-routing.module';
import { NuevoPComponent } from './nuevo-p.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NuevoPComponent
  ],
  imports: [
    CommonModule,
    NuevoPRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NuevoPModule { }
