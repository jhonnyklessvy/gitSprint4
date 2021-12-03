import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarMComponent } from './consultar-m.component';

const routes: Routes = [{ path: '', component: ConsultarMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarMRoutingModule { }
