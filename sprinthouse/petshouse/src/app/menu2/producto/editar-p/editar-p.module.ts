import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPRoutingModule } from './editar-p-routing.module';
import { EditarPComponent } from './editar-p.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditarPComponent
  ],
  imports: [
    CommonModule,
    EditarPRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EditarPModule { }
