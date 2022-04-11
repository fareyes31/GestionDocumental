import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  
  estado = new EventEmitter<boolean>();

  constructor() {
    setInterval(()=>{
      this.estado.emit(!this.estado)
    },3000)
  }
}
