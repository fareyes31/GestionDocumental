import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ListUsuariosService } from '../../../services/list-usuarios.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent implements OnInit {

  formedituser:FormGroup;
  datosusuarios:any;
  subslistusuarios?:Subscription;
  subsedituser?:Subscription;

  constructor(public dialog: MatDialog,
    private ListUsuariosService:ListUsuariosService,
    private toastr:ToastrService,
    private fb:FormBuilder,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) data) {

      this.datosusuarios = data;

      this.formedituser = this.fb.group({
        id: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        name: ['', [ Validators.required]],
        password: ['', Validators.required]
      })

    }

  ngOnInit(): void {
    this.subslistusuarios = this.ListUsuariosService.buscarusuario(this.datosusuarios).subscribe((res)=>{
      this.formedituser = this.fb.group({
        id: [res.users.id],
        email: [res.users.email],
        name: [res.users.name],
        password: ['']
      })
    },error=>{
      if(error.status == '401'){
        this.dialog.closeAll();
        sessionStorage.removeItem('token')
        this.router.navigate(['/login']);
        this.toastr.error('ACCESO NO AUTORIZADO' , error.status);
      }else{
        this.toastr.error(error.error.error+'!' , error.status);
        this.closeDialog();
      }
    })
  }

  ngOnDestroy(){
    this.subslistusuarios?.unsubscribe();
    this.subsedituser?.unsubscribe();
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  editarusuario(){
    this.subsedituser = this.ListUsuariosService.edituser(this.formedituser.value).subscribe((res)=>{
      this.toastr.success(res.message);
    },error=>{
      console.log(error);
    })
  }

}
