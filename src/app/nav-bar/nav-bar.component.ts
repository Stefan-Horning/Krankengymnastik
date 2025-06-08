import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,HttpClientModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuOpen:boolean = false;
  isMenuChecked:boolean = false;

  switch() {
    this.isMenuChecked = !this.isMenuChecked;
    this.isMenuOpen = !this.isMenuOpen;
  }

  stop(event: Event) {
    event.stopPropagation();
  }

  dataJson: { [key: string]: any } = {};


  http = inject(HttpClient)

  constructor() {
    //this.loadDefaultData();
    this.loadData();
  }

  loadDefaultData() {
    this.http.get<{ data: any[] }>('./assets/navigations.json').subscribe(data => {
      this.dataJson = data.data[0];
    });
  }

  private loadData() {
    const url = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=navigations';
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
