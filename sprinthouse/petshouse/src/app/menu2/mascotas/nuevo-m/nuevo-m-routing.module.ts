import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoMComponent } from './nuevo-m.component';

const routes: Routes = [{ path: '', component: NuevoMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoMRoutingModule { }
