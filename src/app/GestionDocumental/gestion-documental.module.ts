import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MenuComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,ReactiveFormsModule, HttpClientModule
  ],
  exports: [LoginComponent]
})
export class GestionDocumentalModule { }
