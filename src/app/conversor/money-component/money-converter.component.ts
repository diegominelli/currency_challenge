import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../money-service/api.service';
import{Currency} from '../money-model/currency';
import{CurrencyBase} from '../money-model/currency-base'
import { Calculator } from '../money-model/calculator'

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {
  calculator:any;
  modelMoneyBase:any;
  modelMoneyTwo:any;

  
  constructor(private apiservice: ApiService) { 
    this.calculator =  new Calculator(0 , 0);
    this.modelMoneyTwo = new Currency("BRL", 20); 
    this.modelMoneyBase = new CurrencyBase("USD");
  }
  
  entries:any;
  moneys:any;
  rates:any;
  ngOnInit(): void {
    this.callApi();
    this.changeCurrentRate();
    
  }
  
  callApi() {
    let moneydata;
    this.apiservice.getData(this.modelMoneyBase.money_name).subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); 
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates);
      }
    );

  }
          
  calcOne(event){
    this.changeCurrentRate();
    this.calculator.inputValueTwo = this.calculator.inputValueOne * this.modelMoneyTwo.rate; 
    // console.log(`valor de input2: ${this.calculator.inputValueTwo}`);
    // console.log(`valor de modelMoneyTwo.rate: ${this.modelMoneyTwo.rate}`);
  }

  calcTwo(event){
    // let result = event.target.value;
    // this.numResultTwo = Number(result);
    // this.numResultTwo /= this.modelMoneyTwo.rate; 
  }

  changemoneyOne(event) {
    // linha abaixo redundante:
    // this.modelMoneyBase.money_name = event.target.value 

    this.callApi()
    this.changeCurrentRate();
  }
  
  changemoneyTwo(event) {
    // linha abaixo redundante:
    // this.modelMoneyTwo.money_name = event.target.value;

    this.changeCurrentRate()
  }

  changeCurrentRate() {
    let index = this.moneys.indexOf(this.modelMoneyTwo.money_name);
    this.modelMoneyTwo.rate = this.rates[index];
  }

}

