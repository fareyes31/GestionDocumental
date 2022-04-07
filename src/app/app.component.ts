import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionDocumental';
  token:any = '';

  constructor(private route:Router) {
    this.token = localStorage.getItem('token');
    console.log('token desde el constructor'+this.token)
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    console.log('token desde el ngOnit'+this.token)
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

}
