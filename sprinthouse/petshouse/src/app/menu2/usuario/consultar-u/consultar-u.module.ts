import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarURoutingModule } from './consultar-u-routing.module';
import { ConsultarUComponent } from './consultar-u.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConsultarUComponent
  ],
  imports: [
    CommonModule,
    ConsultarURoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ConsultarUModule { }
