import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { ValidateAutorizationService } from '../../services/validate-autorization.service';
import { Subscription } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  subsvalidador?:Subscription

  matcher = new MyErrorStateMatcher();

  formregister:FormGroup;

  constructor(
    private fb:FormBuilder,
    private RegisterService:RegisterService,
    private toastr:ToastrService,
    private router:Router,
    private ValidateAutorizationService:ValidateAutorizationService) {

    this.formregister = this.fb.group({
      email: ['FAREYES31@MISENA.EDU.CO', [Validators.email, Validators.required]],
      usuario: ['ANDRES REYES', [ Validators.required]],
      contraseña: ['12345678', Validators.required]
    })
  }

  ngOnInit(): void {
    this.subsvalidador = this.ValidateAutorizationService.validador().subscribe((resp)=>{
    },error=>{
      if(error.status == '401'){
      sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.toastr.error('ACCESO NO AUTORIZADO!');
      }
    });
  }

  ngOnDestroy(){
    this.subsvalidador?.unsubscribe();
  }

  registeruser(){
    this.RegisterService.registeruser(this.formregister.value).subscribe((res:any)=>{
      this.formregister.reset();
      this.router.navigate(['list-usuarios'])
      this.toastr.success('USUARIO REGISTRADO!');
    },error => {
      this.toastr.error(error.error.email[0]+'!' , error.status);
    })
  }
}
