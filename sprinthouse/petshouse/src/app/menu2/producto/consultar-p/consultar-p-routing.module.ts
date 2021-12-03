import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarPComponent } from './consultar-p.component';

const routes: Routes = [{ path: '', component: ConsultarPComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarPRoutingModule { }
