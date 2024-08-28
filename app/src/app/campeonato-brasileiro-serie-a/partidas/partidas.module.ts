import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartidasComponent} from "./partidas.component";
import {PartidasRoutingModule} from "./partidas-routing.module";
import {NgxIconify} from "ngx-iconify";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [PartidasComponent],
  imports: [
    PartidasRoutingModule,
    NgxIconify,
    MatButtonModule,
    CommonModule
  ]
})
export class PartidasModule { }
