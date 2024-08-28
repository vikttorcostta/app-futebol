import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RodadasComponent} from "./rodadas.component";
import {RodadasRoutingModule} from "./rodadas-routing.module";
import {NgxIconify} from "ngx-iconify";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [RodadasComponent],
  imports: [
    CommonModule,
    RodadasRoutingModule,
    MatButtonModule,
    NgxIconify
  ]
})
export class RodadasModule { }
