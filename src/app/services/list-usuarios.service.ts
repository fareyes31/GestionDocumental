import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ListUsuariosService {

  baseurl:string='http://127.0.0.1:8000/api/auth/'
  token:any ="";

  constructor(private Http:HttpClient,private toastr:ToastrService,private router:Router) {  }

  listUsuarios(){
    this.token = sessionStorage.getItem('token');
    const headers={
      'Authorization':'Bearer '+this.token
    }
    return this.Http.get<any>(`${this.baseurl}obtenerusuarios`,{headers})

  }


  buscarusuario(id:number){
    this.token = sessionStorage.getItem('token');
    const headers={
      'Authorization':'Bearer '+this.token
    }
    const params={
      'id':id
    }
    return this.Http.get<any>(`${this.baseurl}searchuser`,{headers, params})

  }
}
