import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';

@Component({
  selector: 'app-physiotherapie',
  standalone: true,
  imports: [RouterLink,ContactPreComponent],
  templateUrl: './physiotherapie.component.html',
  styleUrl: './physiotherapie.component.scss'
})
export class PhysiotherapieComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  
}
}
