import { Component, OnInit } from '@angular/core';
import { ListUsuariosService } from '../../services/list-usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DataListUsers } from './list.type';
import { EditModalComponent } from './edit-modal/edit-modal.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'email' ,'editar'];
  dataSource:DataListUsers[] = [];

  constructor(public dialog: MatDialog,private ListUsuariosService:ListUsuariosService, private toastr:ToastrService, private router:Router) { }

  openDialog(id:number) {

    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = id;

    this.dialog.open(EditModalComponent , dialogConfig);
  }

  ngOnInit(): void {

    this.ListUsuariosService.listUsuarios().subscribe((resp)=>{
      this.dataSource=resp.users;
    }),
    (error:any) => {
      this.toastr.error('ACCESO NO AUTORIZADO!', 'Valida tus credenciales de acceso!');
    }

  }

}

