import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidateAutorizationService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'
  token:any=""
  constructor(private Http:HttpClient) { }

  validador(){
    this.token = sessionStorage.getItem('token');
    const headers={
      'Authorization':'Bearer '+this.token
    }
    return this.Http.get<any>(`${this.baseurl}validartoken`,{headers})
  }
}
