import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAComponent } from './editar-a.component';

const routes: Routes = [{ path: '', component: EditarAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarARoutingModule { }
