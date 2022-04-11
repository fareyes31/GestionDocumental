import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionDocumental';
  // token$: boolean;
  token:boolean = true;

  constructor(private route:Router, private LoginService:LoginService) {

  }

  ngOnInit(): void {
    this.LoginService.getToken().subscribe((response)=>{
      console.log('respuesta ', response);
      
    })
  }



  // ValidarToken(){
  //   this.token$ = this.LoginService.getToken();
  //   this.token$.subscribe((res) => {
  //     this.token = res
  //     })
  // }

}
