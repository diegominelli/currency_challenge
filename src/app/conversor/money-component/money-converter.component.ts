import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../money-service/api.service';
import{Currency} from '../money-model/currency';
import{CurrencyBase} from '../money-model/currency-base';
import { Calculator } from '../money-model/calculator';
import { BroadcastRatesService } from '../../broadcast-rates.service';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {
  calculator:any;
  modelMoneyBase:any;
  modelMoneyTwo:any;
  dolarRateToReal: any;
  euroRateToReal: any;
  
  constructor(private apiservice: ApiService, private _broadcast: BroadcastRatesService) { 
    this.calculator =  new Calculator(null , 0);
    this.modelMoneyTwo = new Currency("BRL", null); 
    this.modelMoneyBase = new CurrencyBase("USD");
  }
  
  entries:any;
  moneys:any;
  rates:any;
  ngOnInit(): void {
    this.callApi();
    this.setEuroAndDolarToRealRateByApi();
  }
  
  callApi() {
    let moneydata;
    this.apiservice.getData(this.modelMoneyBase.money_name).subscribe(
      (data) => {
        moneydata = new Object(data);
        this.entries = Object.entries(moneydata.rates); 
        this.moneys = Object.keys(moneydata.rates);
        this.rates = Object.values(moneydata.rates);
        if(this.calculator.inputValueOne == null || this.calculator.inputValueTwo === "" ){
          this.calculator.inputValueOne = 1;
          let realIndex = Object.keys(moneydata.rates).indexOf('BRL');
          this.modelMoneyTwo.rate = this.rates[realIndex];
        }else{
          // TODO: verificar se esta setando valores redundamente fora do subscribe
          let index = this.moneys.indexOf(this.modelMoneyTwo.money_name);
          this.modelMoneyTwo.rate = this.rates[index];
        }
        this.calculator.inputValueTwo = this.calculator.inputValueOne*this.modelMoneyTwo.rate;
        this.calculator.inputValueTwo = this.calculator.inputValueTwo.toFixed(2);
      }
    );
  }
 
  
  setEuroAndDolarToRealRateByApi() {
    let moneydata;
    this.apiservice.getData("BRL").subscribe(
      (data) => {
        moneydata = new Object(data);
        console.log(moneydata);
        let dolarIndex = Object.keys(moneydata.rates).indexOf('USD');
        let euroIndex = Object.keys(moneydata.rates).indexOf('EUR');
        this.dolarRateToReal = Object.values(moneydata.rates)[dolarIndex];
        this.dolarRateToReal = 1/this.dolarRateToReal;
        this.dolarRateToReal = this.dolarRateToReal.toFixed(2);
        this.euroRateToReal = Object.values(moneydata.rates)[euroIndex];
        this.euroRateToReal = 1/this.euroRateToReal;
        this.euroRateToReal = this.euroRateToReal.toFixed(2);
        this._broadcast.broadcastRates(this.dolarRateToReal, this.euroRateToReal);
      }
    );
  }
      
  // TODO: event not been used - remove
  calcOne(event){
    this.changeCurrentRate();
    this.calculator.inputValueTwo = this.calculator.inputValueOne * this.modelMoneyTwo.rate; 
    this.calculator.inputValueTwo = this.calculator.inputValueTwo.toFixed(2)
  }

  calcTwo(event){
    this.changeCurrentRate();
    this.calculator.inputValueOne = this.calculator.inputValueTwo / this.modelMoneyTwo.rate;
    this.calculator.inputValueOne = this.calculator.inputValueOne.toFixed(2)
    // let result = event.target.value;
    // this.numResultTwo = Number(result);
    // this.numResultTwo /= this.modelMoneyTwo.rate; 
  }

  changemoneyOne(event) {
    // linha abaixo redundante:
    // this.modelMoneyBase.money_name = event.target.value 
    this.callApi();
    this.changeCurrentRate();
  }
  
  changemoneyTwo(event) {
    // TODO: working but calling api too many times - not necessary
    this.callApi();
    this.changeCurrentRate()

  }

  changeCurrentRate() {
    let index = this.moneys.indexOf(this.modelMoneyTwo.money_name); // ERROR
    this.modelMoneyTwo.rate = this.rates[index];
  }

}

