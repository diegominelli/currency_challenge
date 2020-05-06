import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private finaldata = [];
  private apiurl = "https://api.exchangeratesapi.io/";
  baseprefix ='latest?base=';

  historicalprefix = "history?start_at=2018-01-01&end_at=2020-04-16&symbols=";

  constructor(private http: HttpClient) { }
  getData(moneybase) {
    let finalurl = this.apiurl + this.baseprefix + moneybase;
    return this.http.get(finalurl);
  }

  getHistoricalData(moneyBase:string, money:string){
    let finalHistUrl = this.apiurl + this.historicalprefix + moneyBase + "," + money;
    return this.http.get(finalHistUrl);
  }
}
 