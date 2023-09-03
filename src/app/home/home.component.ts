
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

import * as ScrollMagic from 'scrollmagic';
import { TweenMax, Power2 } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  slideImg!: HTMLImageElement;
  content1!: HTMLElement;
content2!: HTMLElement;

  ngOnInit(): void {
    this.slideImg = document.getElementById("slideImg") as HTMLImageElement;
    this.content1 = document.getElementById("content1") as HTMLElement;
    this.content2 = document.getElementById("content2") as HTMLElement;
    this.len = this.images.length;
    this.slider();

/**/






  }
  images: string[] = [
     "assets/img/banner02.jpg",
    "assets/img/bg_06.jpg"

  ];
  len: number=0;
  i: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    AOS.init();



  }
  slider() {
    if (this.i > this.len - 1) {
      this.i = 0;
    }
    this.slideImg.src = this.images[this.i];
    this.content1.style.display = "none";
    this.content2.style.display = "none";

    if (this.i === 0) {
      this.content1.style.display = "block";

    } else if (this.i === 1) {
      this.content2.style.display = "block";

    }
    this.i++;
    setTimeout(() => this.slider(), 5000);
  }





}
