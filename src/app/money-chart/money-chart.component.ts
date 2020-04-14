import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-money-chart',
  templateUrl: './money-chart.component.html',
  styleUrls: ['./money-chart.component.css']
})
export class MoneyChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [4.2, 4.3, 5.1, 5.3, 5.2, 5.6, 5.9, 6.1, 6.4, 6.1, 5.9, 6,15], label: 'Dolar prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'rgba(41,44,48,0.60)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}