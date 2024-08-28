import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FasesComponent} from "./fases.component";
import {FasesRoutingModule} from "./fases-routing.module";
import {NgxIconify} from "ngx-iconify";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [FasesComponent],
  imports: [
    FasesRoutingModule,
    NgxIconify,
    MatButtonModule,
    CommonModule
  ]
})
export class FasesModule { }
