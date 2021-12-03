import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarMComponent } from './editar-m.component';

const routes: Routes = [{ path: '', component: EditarMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarMRoutingModule { }
