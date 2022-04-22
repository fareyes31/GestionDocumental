import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private route:Router, public GeneralService:GeneralService ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

}
