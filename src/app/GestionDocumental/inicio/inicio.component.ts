import { Component, OnInit } from '@angular/core';
import { ValidateAutorizationService } from '../../services/validate-autorization.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  subsvalidador?:Subscription

  constructor(private ValidateAutorizationService:ValidateAutorizationService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(){
    this.subsvalidador = this.ValidateAutorizationService.validador().subscribe((resp)=>{
    },error=>{
      if(error.status == '401'){
      sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.toastr.error('ACCESO NO AUTORIZADO!');
      }
    });
  }

  ngOnDestroy(){
    this.subsvalidador?.unsubscribe();
  }

}
