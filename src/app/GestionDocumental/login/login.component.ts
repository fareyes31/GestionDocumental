import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  formlogin: FormGroup;

  constructor(private fb: FormBuilder, private LoginService: LoginService, private toastr:ToastrService, private router:Router) {
    this.formlogin = this.fb.group({
      usuario: ['soporte@organizacionbless.com.co', [Validators.email, Validators.required]],
      contraseña: ['12345678', Validators.required]
    })
   }

  ngOnInit(): void {

  }

  loginuser(){
    this.LoginService.loginuser(this.formlogin.value).subscribe((res:any)=>{
      sessionStorage.setItem('token', res.access_token);
      this.formlogin.reset();
      this.toastr.success('ACCESO AUTORIZADO!', 'Bienvenido!');
      this.router.navigate(['inicio'])
    },(error:any) => {
      if(error.status == '401'){
        sessionStorage.removeItem('token');
        this.toastr.error('Valida tus credenciales de acceso!', 'ACCESO NO AUTORIZADO!');
      }else if(error.status == '500'){
        this.toastr.error('Sin conexion con el servidor!', 'ERROR!');
      }else{
        this.toastr.error('Error no especificado!', 'ERROR!');
      }
    }
  )}
}
