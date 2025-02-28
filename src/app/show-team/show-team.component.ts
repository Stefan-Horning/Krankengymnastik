import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-team.component.html',
  styleUrl: './show-team.component.scss'
})
export class ShowTeamComponent implements OnInit{
  images: string[] = [
    'assets/img/people/Stefan.webp',
    'assets/img/people/Nicolas.webp',
    'assets/img/people/Julia.webp',
    'assets/img/people/Philip.webp',
    'assets/img/people/Ulla.webp',
  ];
  currentImageIndex: number = 0;

  currentText:string = "";
  intervalId: any;

  text:string[] = [
    'Stefan Paul',
    'Nicolas Mainz',
    'Julia Mainz',
    'Philip Heinrichs',
    'Ulla Mügge',
  ]
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 12000); 
  }
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setText(this.currentImageIndex);
  }


  setText(index:number){
    this.currentText = this.text[index];
  }
}
