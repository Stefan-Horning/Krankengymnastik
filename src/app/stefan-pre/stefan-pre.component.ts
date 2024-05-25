import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-stefan-pre',
  standalone: true,
  imports: [],
  templateUrl: './stefan-pre.component.html',
  styleUrl: './stefan-pre.component.scss'
})
export class StefanPreComponent {
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
