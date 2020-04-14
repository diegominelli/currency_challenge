import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  touched = false;
  // navLinks: any;
  constructor() { }

  ngOnInit(): void {
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
