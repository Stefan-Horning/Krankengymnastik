import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';

@Component({
  selector: 'app-heilkunde',
  standalone: true,
  imports: [RouterLink,ContactPreComponent],
  templateUrl: './heilkunde.component.html',
  styleUrl: './heilkunde.component.scss'
})
export class HeilkundeComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  
}
}
