import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { StefanPreComponent } from '../stefan-pre/stefan-pre.component';
import { Router, RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShowTeamComponent } from '../show-team/show-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContactPreComponent,StefanPreComponent,RouterLink,ShowTeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'assets/img/Physiotherapie.jpeg',
    'assets/img/Osteopathie.jpeg',
    'assets/img/Naturheilpraxis.jpeg'
  ];

  currentText:string = ""

  setText(index:number){
    this.currentText = this.text[index];
  }

  text:string[] = [
    "Physiotherapie",
    "Osteopathie",
    "Heilkunde",
  ]

  imagesstyle:string[] = [

  ]
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef,private scroller: ViewportScroller,private router: Router) {}


  ngOnInit(): void {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 550,
    });
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4750); 
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setText(this.currentImageIndex);
  }

  c1() {
    const inputElement = document.getElementById('c1') as HTMLInputElement;
    if (inputElement.checked) {
      this.router.navigate(['/osteopathie']);
    }
  }

  c2() {
    const inputElement = document.getElementById('c2') as HTMLInputElement;
    if (inputElement.checked) {
      this.router.navigate(['/physiotherapie']);
    }
  }

  c3() {
    const inputElement = document.getElementById('c3') as HTMLInputElement;
    if (inputElement.checked) {
      this.router.navigate(['/heilkunde']);
    }
  }
}
