import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarAComponent } from './consultar-a.component';

const routes: Routes = [{ path: '', component: ConsultarAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarARoutingModule { }
