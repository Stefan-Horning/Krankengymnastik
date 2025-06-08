import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact-pre',
  standalone: true,
  imports: [RouterLink,HttpClientModule],
  templateUrl: './contact-pre.component.html',
  styleUrl: './contact-pre.component.scss'
})
export class ContactPreComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 550,
    });
  }

  http = inject(HttpClient)

  dataJson: { [key: string]: any } = {};



  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }

  constructor() {
    //this.loadDefaultData();
    this.loadData();
  }

  loadDefaultData() {
    this.http.get<{ data: any[] }>('./assets/kontakt-previews.json').subscribe(data => {
      this.dataJson = data.data[0];
    });
  }


  private loadData() {
    const url = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=kontakt-previews';
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
