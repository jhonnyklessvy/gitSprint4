import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarARoutingModule } from './consultar-a-routing.module';
import { ConsultarAComponent } from './consultar-a.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConsultarAComponent
  ],
  imports: [
    CommonModule,
    ConsultarARoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ConsultarAModule { }
