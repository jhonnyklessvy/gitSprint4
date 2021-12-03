import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoURoutingModule } from './nuevo-u-routing.module';
import { NuevoUComponent } from './nuevo-u.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NuevoUComponent
  ],
  imports: [
    CommonModule,
    NuevoURoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NuevoUModule { }
