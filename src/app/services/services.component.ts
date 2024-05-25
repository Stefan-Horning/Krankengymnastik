import { Component, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ContactPreComponent,RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
