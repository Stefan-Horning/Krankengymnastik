import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact-pre',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-pre.component.html',
  styleUrl: './contact-pre.component.scss'
})
export class ContactPreComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 550,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }
}
