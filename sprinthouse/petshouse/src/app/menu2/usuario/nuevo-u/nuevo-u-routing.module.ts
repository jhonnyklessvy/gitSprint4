import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUComponent } from './nuevo-u.component';

const routes: Routes = [{ path: '', component: NuevoUComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoURoutingModule { }
