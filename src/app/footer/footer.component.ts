import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  dataJson: { [key: string]: any } = {};

   http = inject(HttpClient)

  constructor() {
    //this.loadDefaultData();
    this.loadData();
  }

  loadDefaultData() {
    this.http.get<{ data: any[] }>('./assets/footers.json').subscribe(data => {
      this.dataJson = data.data[0];
    });
  }
  

  getGoogleMapsLink(adresse: string): string {
    const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
    return baseUrl + encodeURIComponent(adresse);
  }

  private loadData() {
    const url = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=footer';
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
