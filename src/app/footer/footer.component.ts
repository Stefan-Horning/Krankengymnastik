import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  dataJson: { [key: string]: any } = {};

  constructor() {
    this.loadData();
  }

  private readonly defaultData = {

  }

  getGoogleMapsLink(adresse: string): string {
    const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
    return baseUrl + encodeURIComponent(adresse);
  }

  private loadData() {
    fetch('https://osteo-server-app.onrender.com/api/footers')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && Array.isArray(data.data) && data.data[0]) {
          this.dataJson = data.data[0];
          console.log(this.dataJson);
          
        } else {
          console.warn("Unerwartete Datenstruktur, Fallback wird verwendet.");
         // this.dataJson = this.defaultData;
        }
      })
      .catch(error => {
        console.error("Fehler beim Laden der Daten:", error);
        //this.dataJson = this.defaultData;
      });
  }
}
