import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarMRoutingModule } from './consultar-m-routing.module';
import { ConsultarMComponent } from './consultar-m.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConsultarMComponent
  ],
  imports: [
    CommonModule,
    ConsultarMRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ConsultarMModule { }
