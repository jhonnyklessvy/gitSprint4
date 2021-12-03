import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPComponent } from './editar-p.component';

const routes: Routes = [{ path: '', component: EditarPComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarPRoutingModule { }
