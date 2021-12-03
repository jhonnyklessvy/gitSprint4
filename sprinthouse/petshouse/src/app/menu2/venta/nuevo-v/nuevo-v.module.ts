import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoVRoutingModule } from './nuevo-v-routing.module';
import { NuevoVComponent } from './nuevo-v.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NuevoVComponent
  ],
  imports: [
    CommonModule,
    NuevoVRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NuevoVModule { }
