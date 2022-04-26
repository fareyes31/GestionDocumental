import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ListUsuariosService } from '../../../services/list-usuarios.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent implements OnInit {

  datosusuarios:any;
  subslistusuarios?:Subscription;
  formedituser:FormGroup;

  constructor(public dialog: MatDialog,
    private ListUsuariosService:ListUsuariosService,
    private toastr:ToastrService,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data) {

      this.datosusuarios = data;

      this.formedituser = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        usuario: ['', [ Validators.required]],
        contraseña: ['', Validators.required]
      })

    }

  ngOnInit(): void {
    this.subslistusuarios = this.ListUsuariosService.buscarusuario(this.datosusuarios).subscribe((res)=>{
      this.formedituser = this.fb.group({
        email: [res.users.email],
        usuario: [res.users.name],
        contraseña: ['']
      })
    },error=>{
      this.closeDialog();
      this.toastr.error(error.error.error+'!' , error.status);
    })
  }

  ngOnDestroy(){
    this.subslistusuarios?.unsubscribe();
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  editarusuario(){

  }

}
