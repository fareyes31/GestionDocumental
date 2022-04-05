import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './GestionDocumental/login/login.component';
import { InicioComponent } from './GestionDocumental/inicio/inicio.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { RegisterComponent } from './GestionDocumental/register/register.component';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [VigilanteGuard]
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
