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
    'assets/img/people/Stefan.jpg',
    'assets/img/people/Nicolas.jpg',
    'assets/img/people/Julia.jpg',
    'assets/img/people/Philip.jpg',
    'assets/img/people/Ulla.jpg',
    'assets/img/people/Siglinde.jpg',
    'assets/img/people/Simone.jpg',
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
    'Siglinde Kämper',
    'Simone Kirches'
  ]
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4750); 
  }
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setText(this.currentImageIndex);
  }


  setText(index:number){
    this.currentText = this.text[index];
  }
}
