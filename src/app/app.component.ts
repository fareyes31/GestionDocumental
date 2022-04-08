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
  token$: Observable<string>;
  token="";

  constructor(private route:Router, private LoginService:LoginService) {
    this.token$ = this.LoginService.getToken();
    this.ValidarToken()
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.ValidarToken()
    this.route.navigate(['login']);
  }

  ValidarToken(){
    this.token$ = this.LoginService.getToken();
    this.token$.subscribe((res) => {
      this.token = res
      })
  }

}
