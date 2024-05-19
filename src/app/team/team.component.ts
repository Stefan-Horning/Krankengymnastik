import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { StefanPreComponent } from '../stefan-pre/stefan-pre.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,ContactPreComponent,StefanPreComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit{
  images: string[] = [
    'assets/img/people/Julia.jpg',
    'assets/img/people/Nicolas.jpg',
    'assets/img/people/Philip.jpg',
    'assets/img/people/Siglinde.jpg',
    'assets/img/people/Ulla.jpg',
    'assets/img/people/Simone.jpg',
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  names: string[] = [
    'Julia',
    'Nicolas',
    'Philip',
    'Siglinde',
    'Ulla',
    'Simone',
  ];
  
}
