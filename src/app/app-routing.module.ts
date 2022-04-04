import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './GestionDocumental/login/login.component';
import { InicioComponent } from './GestionDocumental/inicio/inicio.component';
import { VigilanteGuard } from './guards/vigilante.guard';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    // pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
