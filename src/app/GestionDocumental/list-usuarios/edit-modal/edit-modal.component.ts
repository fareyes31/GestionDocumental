import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ListUsuariosService } from '../../../services/list-usuarios.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent implements OnInit {
  datosusuarios:any;
  constructor(public dialog: MatDialog, private ListUsuariosService:ListUsuariosService, private toastr:ToastrService ,@Inject(MAT_DIALOG_DATA) data) {
    this.datosusuarios = data;
   }

  ngOnInit(): void {
    this.ListUsuariosService.buscarusuario(this.datosusuarios).subscribe((res)=>{
      console.log(res)
    },error=>{
      this.closeDialog();
      this.toastr.error(error.error.error+'!' , error.status);
      // console.log(error.error.error)
    })
  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
