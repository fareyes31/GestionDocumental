import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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

  constructor(private fb:FormBuilder) {

    this.formregister = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      usuario: ['', [ Validators.required]],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registeruser(){
    console.log(this.formregister)
  }
}
