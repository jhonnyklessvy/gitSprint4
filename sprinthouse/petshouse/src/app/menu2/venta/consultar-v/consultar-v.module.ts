import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarVRoutingModule } from './consultar-v-routing.module';
import { ConsultarVComponent } from './consultar-v.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConsultarVComponent
  ],
  imports: [
    CommonModule,
    ConsultarVRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ConsultarVModule { }
