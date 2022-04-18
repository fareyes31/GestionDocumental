import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListUsuariosService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'
  token:any ="";
  constructor(private Http:HttpClient) {
    this.token = localStorage.getItem('token');
  }

  listUsuarios(){
    const headers={
      'Authorization':'Bearer '+this.token
    }
    const params={
      'id':5
    }
    return this.Http.get<any>(`${this.baseurl}searchuser`,{headers, params})
  }
}
