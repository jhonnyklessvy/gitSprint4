import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarURoutingModule } from './editar-u-routing.module';
import { EditarUComponent } from './editar-u.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditarUComponent
  ],
  imports: [
    CommonModule,
    EditarURoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EditarUModule { }
