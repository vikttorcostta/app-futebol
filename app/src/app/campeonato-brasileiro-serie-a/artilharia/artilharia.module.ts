import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtilhariaComponent} from "./artilharia.component";
import {ArtilhariaRoutingModule} from "./artilharia-routing.module";
import {NgxIconify} from "ngx-iconify";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [ArtilhariaComponent],
  imports: [
    ArtilhariaRoutingModule,
    NgxIconify,
    MatButtonModule,
    CommonModule
  ]
})
export class ArtilhariaModule { }
