import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarVComponent } from './consultar-v.component';

const routes: Routes = [{ path: '', component: ConsultarVComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarVRoutingModule { }
