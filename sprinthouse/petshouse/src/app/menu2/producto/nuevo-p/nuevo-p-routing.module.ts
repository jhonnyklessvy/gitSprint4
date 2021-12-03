import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPComponent } from './nuevo-p.component';

const routes: Routes = [{ path: '', component: NuevoPComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoPRoutingModule { }
