import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private finaldata = [];
  // TODO: retirar latest da url base e add depois
  // https://api.exchangeratesapi.io/latest?base=USD
  private apiurl = "https://api.exchangeratesapi.io/latest";
  base ='?base=USD';
  private finalurl = this.apiurl + this.base;

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.finalurl);
  }
}
 