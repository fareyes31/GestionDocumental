import { Component, OnInit } from '@angular/core';
import { ListUsuariosService } from '../../services/list-usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

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
  dataSource = [];

  constructor(public dialog: MatDialog,private ListUsuariosService:ListUsuariosService, private toastr:ToastrService, private router:Router) { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {

    this.ListUsuariosService.listUsuarios().subscribe((resp)=>{
      // console.log(resp)
      this.dataSource=resp.users;
    }),
    (error:any) => {
      this.toastr.error('ACCESO NO AUTORIZADO!', 'Valida tus credenciales de acceso!');
    }

  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

  constructor(public dialog: MatDialog){}

  closeDialog(){
    this.dialog.closeAll();
  }
}
