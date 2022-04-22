import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  
  estado = new EventEmitter<boolean>();

  constructor() {
    console.log('inicio servicios globales')
    setInterval(()=>{
      this.estado.emit(!this.estado)
    },3000)
  }
}
