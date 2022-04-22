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
    this.dialog.open(DialogElementsExampleDialog , {
      height: '400px',
      width: '600px',
    });
  }

  ngOnInit(): void {

    this.ListUsuariosService.listUsuarios().subscribe((resp)=>{
      this.dataSource=resp.users;
      console.log(this.dataSource[0]['id'])
    }),
    (error:any) => {
      this.toastr.error('ACCESO NO AUTORIZADO!', 'Valida tus credenciales de acceso!');
    }

  }
  //1512444

}

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.html',
})
export class DialogElementsExampleDialog {

  constructor(public dialog: MatDialog){}

  closeDialog(){
    this.dialog.closeAll();
  }
}
