import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionDocumentalModule } from './GestionDocumental/gestion-documental.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GestionDocumentalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
