import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ListUsuariosComponent } from './list-usuarios.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


const ruta: Route [] = [
  {
    path:'',
    component: ListUsuariosComponent
  }
]

@NgModule({
  declarations: [
    ListUsuariosComponent,
    EditModalComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ruta),
    MatDialogModule
  ]
})
export class ListUsuariosModule {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

}
