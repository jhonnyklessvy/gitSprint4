import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarVComponent } from './editar-v.component';

const routes: Routes = [{ path: '', component: EditarVComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarVRoutingModule { }
