import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoVComponent } from './nuevo-v.component';

const routes: Routes = [{ path: '', component: NuevoVComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoVRoutingModule { }
