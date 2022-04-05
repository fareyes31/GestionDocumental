import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formregister:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formregister= this.fb.group({
      nombre : [''],
      usuario: [''],
      contraseña: ['']
    });
  }

  ngOnInit(): void {
  }

  registeruser(){
    console.log(this.formregister)
  }
}
