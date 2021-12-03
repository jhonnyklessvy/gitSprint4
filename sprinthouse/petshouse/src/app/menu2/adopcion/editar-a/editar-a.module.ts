import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarARoutingModule } from './editar-a-routing.module';
import { EditarAComponent } from './editar-a.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditarAComponent
  ],
  imports: [
    CommonModule,
    EditarARoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EditarAModule { }
