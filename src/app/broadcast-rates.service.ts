import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastRatesService {
  broadcastDolarRate = new EventEmitter<number>();
  broadcastEuroRate = new EventEmitter<number>();

  constructor() { }

  broadcastRates(dolarRate: number, euroRate:number) {
    this.broadcastDolarRate.emit(dolarRate);
    this.broadcastEuroRate.emit(euroRate);
    console.log("estou na funcao broadcastRates do servico");
  }
}
