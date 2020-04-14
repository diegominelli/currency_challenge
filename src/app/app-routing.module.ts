import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HistoricalComponent } from './historical/historical.component';
import { DolarComponent } from './dolar/dolar.component';
import { EuroComponent } from './euro/euro.component';

const routes: Routes = [
  { path: "about", component: AboutComponent }, 
  { path: "historical", component: HistoricalComponent },
  { path: "dolar-to-real", component: DolarComponent },
  { path: "euro-to-real", component: EuroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [AboutComponent, HistoricalComponent, DolarComponent, EuroComponent];