import { Component, OnInit } from '@angular/core';
import { BroadcastRatesService } from '../broadcast-rates.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  touched = false;
  // navLinks: any;
  constructor(private _broadcastlistener: BroadcastRatesService) { }
  dolarRate: number;
  euroRate: number;

  ngOnInit(): void {
    this._broadcastlistener.broadcastDolarRate.subscribe(
      rateUSD => {
        this.dolarRate = rateUSD;
        console.log(`valor de dolarRate:${this.dolarRate}`);
      }
    );
    this._broadcastlistener.broadcastEuroRate.subscribe(
      rateEUR => {
        this.euroRate = rateEUR;
        console.log(`valor de euroRate:${this.euroRate}`);
      }
    );
    
  }

  toggleBurgerDisplay() {
    // Toggle nav
    this.touched = !this.touched;
    
    // if keyframes were working:
    // this.navLinks = document.querySelectorAll('.nav-links li');
    // // Animate links
    // this.navLinks.forEach((link, index) => {
    //   // console.log(`indice do link: ${index}`);
    //   if (link.style.animation) {
    //     link.style.animation = '';
    //   } else {
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1.5}s`;
    //   }
    // });

  }

}
