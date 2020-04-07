import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {
  numResult:number;
  valDolar = 5.24;
  moneyOne:string;
  moneyTwo:string;
  
  
  constructor() { 
    this.moneyOne = "RS";
    this.moneyTwo = "USD";

  }

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

  moneyobject = {"rates":{"CAD":1.528,"HKD":8.3651,"ISK":155.5,"PHP":54.667,"DKK":7.466,"HUF":365.24,"CZK":27.603,
  "AUD":1.779,"RON":4.8335,"SEK":10.9788,"IDR":17710.73,"INR":82.106,"BRL":5.7056,"RUB":82.481,
  "HRK":7.6255,"JPY":117.54,"THB":35.459,"CHF":1.056,"SGD":1.548,"PLN":4.5643,"BGN":1.9558,
  "TRY":7.3136,"CNY":7.6519,"NOK":11.3875,"NZD":1.82,"ZAR":20.3534,"USD":1.0791,"MXN":27.0896,
  "ILS":3.9144,"GBP":0.878,"KRW":1326.04,"MYR":4.7097},"base":"EUR","date":"2020-04-06"}

   //moneys = ["USD","HKD","ISK"];

  moneys = Object.keys(this.moneyobject.rates);
  
  changemoneyOne(event) {
    // var select = document.querySelector('select');
    // var option = select.children[select.selectedIndex];
    // var text = option.textContent;
    this.moneyOne = event.target.value
  }

  changemoneyTwo(event) {
    // var select = document.querySelector('select');
    // var option = select.children[select.selectedIndex];
    // var text = option.textContent;
    this.moneyTwo = event.target.value
  }

}

