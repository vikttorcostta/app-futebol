import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxIconify} from "ngx-iconify";
import {MatButtonModule} from "@angular/material/button";
import {PartidasAoVivoComponent} from "./partidas-ao-vivo.component";
import {PartidasAoVivoComponentModule} from "./partidas-ao-vivo-routing.module";


@NgModule({
  declarations: [PartidasAoVivoComponent],
  imports: [
    PartidasAoVivoComponentModule,
    NgxIconify,
    MatButtonModule,
    CommonModule
  ]
})
export class PartidasAoVivoModule { }
