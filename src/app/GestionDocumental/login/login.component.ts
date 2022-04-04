import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin: FormGroup;

  constructor(private fb: FormBuilder, private LoginService: LoginService, private toastr:ToastrService) {
    this.formlogin = this.fb.group({
      usuario: ['', [Validators.email, Validators.required]],
      contraseña: ['', Validators.required]
    })

    console.log(this.formlogin)

   }

  ngOnInit(): void {
  }

  loginuser(){
    this.LoginService.loginuser(this.formlogin.value).subscribe((res:any)=>{
      localStorage.setItem('token', res.access_token);
      this.toastr.success('ACCESO AUTORIZADO!', 'Bienvenido!');
    },(error:any) => {
      console.log(error.status);
      if(error.status == '401'){
        localStorage.removeItem('token');
        this.toastr.error('ACCESO NO AUTORIZADO!', 'Valida tus credenciales de acceso!');
      }
    }
  )}
}
