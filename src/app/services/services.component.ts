import { Component, inject, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ContactPreComponent,RouterLink,HttpClientModule],
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


  dataJson: { [key: string]: any } = {};

   http = inject(HttpClient)
 
   constructor() {
     //this.loadDefaultData();
     this.loadData();
   }
 
   loadDefaultData() {
     this.http.get<{ data: any[] }>('./assets/leistungens.json').subscribe(data => {
       this.dataJson = data.data[0];
     });
   }

  private loadData() {
    const url = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=Leistungens';
    this.http.get<{ data: any[] }>(url).subscribe({
      next: (data) => {
        if (data && data.data && Array.isArray(data.data) && data.data[0]) {
          this.dataJson = data.data[0];
        } else {
          console.log("Unerwartete Datenstruktur, Fallback wird verwendet.");
          this.loadDefaultData();
        }
      },
      error: (error) => {
        console.log("Fehler beim Laden der Daten:", error);
        this.loadDefaultData();
      }
    });
  }
}
