import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './GestionDocumental/login/login.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { RegisterComponent } from './GestionDocumental/register/register.component';
import { GeneralComponent } from './shared/general/general.component';
import { LoginGuard } from './guards/login.guard';

export const routes: Route[] = [

  {
    path: '',
    component: GeneralComponent,
    canActivate: [VigilanteGuard],
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('src/app/GestionDocumental/inicio/inicio.module').then(m=>m.InicioModule)
      },
      {
        path: 'register',
        loadChildren: () => import('src/app/GestionDocumental/register/register.module').then(m=>m.RegisterModule)
      },
      {
        path: 'list-usuarios',
        loadChildren: () => import('src/app/GestionDocumental/list-usuarios/list-usuarios.module').then(m=>m.ListUsuariosModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],

  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
