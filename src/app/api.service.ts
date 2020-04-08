import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private finaldata = [];
  // TODO: retirar latest da url base e add depois
  private apiurl = "https://api.exchangeratesapi.io/latest";
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiurl);
  }
}
