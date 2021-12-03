import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarMRoutingModule } from './editar-m-routing.module';
import { EditarMComponent } from './editar-m.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditarMComponent
  ],
  imports: [
    CommonModule,
    EditarMRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EditarMModule { }
