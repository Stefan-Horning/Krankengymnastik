import { Component, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-osteopathie',
  standalone: true,
  imports: [RouterLink,ContactPreComponent],
  templateUrl: './osteopathie.component.html',
  styleUrl: './osteopathie.component.scss'
})
export class OsteopathieComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  
}
}
