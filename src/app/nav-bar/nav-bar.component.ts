import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
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

  constructor() {
    this.loadData();
  }

  private readonly defaultData = {
    "Block1": "Home",
    "Block2": "Leistungen",
    "Block3": "Preise",
    "Block4": "Team",
    "Block5": "Kontakt",
  }

  private loadData() {
    fetch('https://osteo-server-app.onrender.com/api/navigations')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && Array.isArray(data.data) && data.data[0]) {
          this.dataJson = data.data[0];
          
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
