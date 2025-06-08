import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-heilkunde',
  standalone: true,
  imports: [RouterLink,ContactPreComponent,HttpClientModule],
  templateUrl: './heilkunde.component.html',
  styleUrl: './heilkunde.component.scss'
})
export class HeilkundeComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  
}


dataJson: { [key: string]: any } = {};


  http = inject(HttpClient)

  constructor() {
    //this.loadDefaultData();
    this.loadData();
  }

  loadDefaultData() {
    this.http.get<{ data: any[] }>('./assets/heilkundes.json').subscribe(data => {
      this.dataJson = data.data[0];
    });
  }

  private loadData() {
    const url = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=heilkunde';
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
