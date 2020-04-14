import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MoneyConverterComponent } from './conversor/money-component/money-converter.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './conversor/money-service/api.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoneyChartComponent } from './money-chart/money-chart.component';

import { AboutComponent } from './about/about.component';
import { HistoricalComponent } from './historical/historical.component';
import { DolarComponent } from './dolar/dolar.component';
import { EuroComponent } from './euro/euro.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyConverterComponent,
    NavBarComponent,
    MoneyChartComponent,
    AboutComponent,
    HistoricalComponent,
    DolarComponent,
    EuroComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
