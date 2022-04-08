import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


@Output() disaprarvalor: EventEmitter<any> = new EventEmitter()


  token="";
  baseurl:string='http://127.0.0.1:8000/api/auth/'

  constructor (private http:HttpClient) {}

  ngOnInit(): void {

  }

  loginuser(form:any){ return this.http.post(`${this.baseurl}login`,{
      email: form.usuario,
      password: form.contraseña
  })
}

  getToken(): Observable<any>{
    const token = localStorage.getItem("token")
    return of(token)
  }
}
