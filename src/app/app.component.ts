import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionDocumental';
  token = '';

  constructor(private route:Router) {
  }

  ngOnInit(): void {
   
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

}
