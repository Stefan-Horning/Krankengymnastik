import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
