import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoAComponent } from './nuevo-a.component';

const routes: Routes = [{ path: '', component: NuevoAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoARoutingModule { }
