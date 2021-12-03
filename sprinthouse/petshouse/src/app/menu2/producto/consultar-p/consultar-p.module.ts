import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarPRoutingModule } from './consultar-p-routing.module';
import { ConsultarPComponent } from './consultar-p.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConsultarPComponent
  ],
  imports: [
    CommonModule,
    ConsultarPRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ConsultarPModule { }
