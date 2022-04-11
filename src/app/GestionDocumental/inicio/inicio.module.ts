import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';

const ruta: Route [] = [
  {
    path:'',
    component: InicioComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ruta)
  ]
})
export class InicioModule { }
