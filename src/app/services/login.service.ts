import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'

  constructor (private http:HttpClient) {}

  ngOnInit(): void {

  }

  loginuser(form:any){ return this.http.post(`${this.baseurl}login`,{
      email: form.usuario,
      password: form.contraseña
  })
}

  getToken(): Observable<boolean>{
    const token = localStorage.getItem("token")
    if(token && token.length > 5){
      return of(true)
    }else{
      return of(false)
    }
  }
}
