import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionDocumental';

  constructor() {

     const token = localStorage.getItem('token')

     if(!token){
      console.log('nada')
        // this.routes.navigate(['/inicio'])
     }else{
       console.log(token)
     }
  }

}