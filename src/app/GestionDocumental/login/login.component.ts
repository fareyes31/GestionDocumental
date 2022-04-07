import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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



  @Output()
  onToken: EventEmitter<number> = new EventEmitter

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
      localStorage.setItem('token', res.access_token);
      this.formlogin.reset();
      this.toastr.success('ACCESO AUTORIZADO!', 'Bienvenido!');

      this.router.navigate(['inicio'])
    },(error:any) => {
      if(error.status == '401'){
        localStorage.removeItem('token');
        this.toastr.error('ACCESO NO AUTORIZADO!', 'Valida tus credenciales de acceso!');
      }
    }
  )}

}
