import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './GestionDocumental/login/login.component';
import { InicioComponent } from './GestionDocumental/inicio/inicio.component';

const routes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
