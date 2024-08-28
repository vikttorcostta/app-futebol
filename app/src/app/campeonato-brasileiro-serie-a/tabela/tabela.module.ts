import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabelaComponent} from "./tabela.component";
import {TabelaRoutingModule} from "./tabela-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {NgxIconify} from "ngx-iconify";



@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    MatButtonModule,
    NgxIconify
  ]
})
export class TabelaModule { }
