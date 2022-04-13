import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListUsuariosService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'
  token:any ="";
  constructor(private Http:HttpClient) {
    this.token = localStorage.getItem('token');
  }

  listUsuarios(){ return this.Http.post(`${this.baseurl}obtenerusuarios`,{
    Authorization: `Bearer ${this.token}`
    })
  }
}
