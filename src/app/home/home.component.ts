import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { StefanPreComponent } from '../stefan-pre/stefan-pre.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContactPreComponent,StefanPreComponent],
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
    'center',
    'center',
    'left',
  ]
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef,private scroller: ViewportScroller) {}

  ngOnInit(): void {
      window.scrollTo(0, 0);
    
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4750); 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setText(this.currentImageIndex);
  }
}
