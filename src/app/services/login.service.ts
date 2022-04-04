import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'

  constructor (private http:HttpClient) {}

  loginuser(form:any){ return this.http.post(`${this.baseurl}login`,{
      email: form.usuario,
      password: form.contraseña
  }) 
}

}
