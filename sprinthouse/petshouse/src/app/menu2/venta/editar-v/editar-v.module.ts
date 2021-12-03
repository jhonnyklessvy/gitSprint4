import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarVRoutingModule } from './editar-v-routing.module';
import { EditarVComponent } from './editar-v.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditarVComponent
  ],
  imports: [
    CommonModule,
    EditarVRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EditarVModule { }
