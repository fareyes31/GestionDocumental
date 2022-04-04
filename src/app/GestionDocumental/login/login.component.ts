import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin: FormGroup;

  constructor(private fb: FormBuilder, private LoginService: LoginService) { 
    this.formlogin = this.fb.group({
      usuario: [''],
      contraseña: ['']
    })
   }

  ngOnInit(): void {
  }

  loginuser(){
    this.LoginService.loginuser(this.formlogin.value).subscribe((res:any)=>{ localStorage.setItem('token', res.access_token) })
  }

}
