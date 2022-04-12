import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'

  constructor(private Http:HttpClient) { }

  registeruser(form:any){ return this.Http.post(`${this.baseurl}register`,{
    email: form.email,
    name: form.usuario,
    password: form.contraseña
  }) }

}
