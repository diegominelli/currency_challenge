import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {
  numResult:number;
  valDolar = 5.24;
  
  constructor() { }

  ngOnInit(): void {
  }

  

  calcOne(event){
    let result = event.target.value;
    this.numResult = Number(result);
    this.numResult *= this.valDolar;
  }

  calcTwo(event){
    let result = event.target.value;
    this.numResult = Number(result);
    this.numResult /= this.valDolar; 
  }

}
