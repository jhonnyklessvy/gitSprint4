import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUComponent } from './editar-u.component';

const routes: Routes = [{ path: '', component: EditarUComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarURoutingModule { }
