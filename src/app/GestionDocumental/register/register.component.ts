import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

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

  matcher = new MyErrorStateMatcher();

  formregister:FormGroup;

  constructor(private fb:FormBuilder, private RegisterService:RegisterService, private toastr:ToastrService, private router:Router) {

    this.formregister = this.fb.group({
      email: ['FAREYES31@MISENA.EDU.CO', [Validators.email, Validators.required]],
      usuario: ['ANDRES REYES', [ Validators.required]],
      contraseña: ['12345678', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registeruser(){
    this.RegisterService.registeruser(this.formregister.value).subscribe((res:any)=>{
      this.formregister.reset();
      this.router.navigate(['inicio'])
      this.toastr.success('USUARIO REGISTRADO!');
    }),(err:any)=>{
      // console.log(error)
    }
  }
}
