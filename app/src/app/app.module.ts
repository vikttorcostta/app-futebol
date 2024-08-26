import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { CampeonatoBrasileiroSerieAComponent } from './campeonato-brasileiro-serie-a/campeonato-brasileiro-serie-a.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    CampeonatoBrasileiroSerieAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
