import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CampeonatoBrasileiroSerieAComponent} from  "./campeonato-brasileiro-serie-a.component";

const routes: Routes = [
  {
    path: "", component: CampeonatoBrasileiroSerieAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class CampeonatoBrasileiroSerieARoutingModule {

}
