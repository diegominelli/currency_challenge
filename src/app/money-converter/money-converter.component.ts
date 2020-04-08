import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from './../api.service';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {
  numResult:number;
  numResultTwo:number; // talvez não necessario
  valDolar = 5.24; // melhorar
  convertionRate:number;
  moneyOne:string;
  moneyTwo:string; // talvez não necessario
  formdata; // TODO: retirar
  
  
  constructor(private apiservice: ApiService) { 
    this.moneyOne = "RS";
    this.moneyTwo = "USD";
    this.numResult = 0;
    this.numResultTwo = 0;

  }

  entries:any;
  moneys:any;
  rates:any;
  ngOnInit(): void {
    let moneydata;
    this.apiservice.getData().subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); // Object.entries(moneydata.rates);
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates); 
      console.log(`moneydata (array keys dos dados da api.rates): ${this.rates}`)
      }
    );

    //input validation
    this.formdata = new FormGroup({
      // fullname: new FormControl("", this.fullnameValidation),
      valOne: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      valTwo: new FormControl("", Validators.compose([
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ])),
    });
  }
  


  calcOne(event){
    let result = event.target.value;
    this.numResult = Number(result);
    this.numResult *= this.valDolar;
  }

  calcTwo(event){
    let result = event.target.value;
    this.numResultTwo = Number(result);
    this.numResultTwo /= this.valDolar; 
  }

  // TODO: submit button is disable
  onClickSubmit(data){

  }

  
  
  changemoneyOne(event) {
    // alterar o valor de convertionRate
    this.moneyOne = event.target.value
  }

  changemoneyTwo(event) {
    // alterar o valor de convertionRate
    this.moneyTwo = event.target.value
  }
}


// objeto retornado pela api:

  // moneyobject = {"rates":{"CAD":1.528,"HKD":8.3651,"ISK":155.5,"PHP":54.667,"DKK":7.466,"HUF":365.24,"CZK":27.603,
  // "AUD":1.779,"RON":4.8335,"SEK":10.9788,"IDR":17710.73,"INR":82.106,"BRL":5.7056,"RUB":82.481,
  // "HRK":7.6255,"JPY":117.54,"THB":35.459,"CHF":1.056,"SGD":1.548,"PLN":4.5643,"BGN":1.9558,
  // "TRY":7.3136,"CNY":7.6519,"NOK":11.3875,"NZD":1.82,"ZAR":20.3534,"USD":1.0791,"MXN":27.0896,
  // "ILS":3.9144,"GBP":0.878,"KRW":1326.04,"MYR":4.7097},"base":"EUR","date":"2020-04-06"}

  // moneys = Object.keys(this.moneyobject.rates);