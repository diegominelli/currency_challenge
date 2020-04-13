import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  //   let burger = document.querySelector('.burger');
  //   let nav = document.querySelector('.nav-links');
  // let navLinks = document.querySelectorAll('.nav-links li');
  
  toggleBurgerDisplay(event) {
  //   // Toggle nav
  //   event.classList.toggle("nav-active");   
    
  //   // Animate links
  //   navLinks.forEach((link, index) => {
  //     if (link.style.animation) {
  //       link.style.animation = '';
  //     } else {
  //       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  //     }
  //   });
      // Burger Animation
      // burger.classList.toggle('toggle');

  }

  

}
