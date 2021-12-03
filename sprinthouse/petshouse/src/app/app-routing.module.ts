import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestionComponent } from './menu2/gestion/gestion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { MenuComponent } from './usua/menu/menu.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "gestion", component: GestionComponent, children: [
      { path: 'consultarA', loadChildren: () => import('./menu2/adopcion/consultar-a/consultar-a.module').then(m => m.ConsultarAModule) },
      { path: 'nuevoA', loadChildren: () => import('./menu2/adopcion/nuevo-a/nuevo-a.module').then(m => m.NuevoAModule) },
      { path: 'editarA/:x', loadChildren: () => import('./menu2/adopcion/editar-a/editar-a.module').then(m => m.EditarAModule) },
      { path: 'consultarM', loadChildren: () => import('./menu2/mascotas/consultar-m/consultar-m.module').then(m => m.ConsultarMModule) },
      { path: 'nuevoM', loadChildren: () => import('./menu2/mascotas/nuevo-m/nuevo-m.module').then(m => m.NuevoMModule) },
      { path: 'editarM/:x', loadChildren: () => import('./menu2/mascotas/editar-m/editar-m.module').then(m => m.EditarMModule) },
      { path: 'consultarP', loadChildren: () => import('./menu2/producto/consultar-p/consultar-p.module').then(m => m.ConsultarPModule) },
      { path: 'nuevoP', loadChildren: () => import('./menu2/producto/nuevo-p/nuevo-p.module').then(m => m.NuevoPModule) },
      { path: 'editarP/:x', loadChildren: () => import('./menu2/producto/editar-p/editar-p.module').then(m => m.EditarPModule) },
      { path: 'consultarV', loadChildren: () => import('./menu2/venta/consultar-v/consultar-v.module').then(m => m.ConsultarVModule) },
      { path: 'nuevoV', loadChildren: () => import('./menu2/venta/nuevo-v/nuevo-v.module').then(m => m.NuevoVModule) },
      { path: 'editarV/:x', loadChildren: () => import('./menu2/venta/editar-v/editar-v.module').then(m => m.EditarVModule) },
      { path: 'consultarU', loadChildren: () => import('./menu2/usuario/consultar-u/consultar-u.module').then(m => m.ConsultarUModule) },
      { path: 'nuevoU', loadChildren: () => import('./menu2/usuario/nuevo-u/nuevo-u.module').then(m => m.NuevoUModule) },
      { path: 'editarU/:x', loadChildren: () => import('./menu2/usuario/editar-u/editar-u.module').then(m => m.EditarUModule) },
    ]
  },
  { path:"registrar", component: RegistrarComponent},
  { path: "login", component: LoginComponent },
  { path: 'administrdor', loadChildren: () => import('./usua/administrador/administrador.module').then(m => m.AdministradorModule) },
  {
    path: "menu", component: MenuComponent,
    children: [
      { path: 'inicio', loadChildren: () => import('./usua/inicio/inicio.module').then(m => m.InicioModule) },
      { path: 'mascota', loadChildren: () => import('./usua/mascota/mascota.module').then(m => m.MascotaModule) },
      { path: 'producto', loadChildren: () => import('./usua/producto/producto.module').then(m => m.ProductoModule) },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
