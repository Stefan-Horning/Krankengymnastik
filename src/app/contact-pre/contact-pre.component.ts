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

  dataJson: { [key: string]: any } = {};

  private readonly defaultData = {
    Ueberschrift: "Zum",
    UeberschriftStyle: "Kontakt",
    ErsterTextBlock: "Fragen? Anregungen? Wir sind hier, um zu helfen!",
    ZweiterTextBlock1: "Ruf uns an unter",
    ZweiterTextBlock2: "oder schreib uns über unser Kontaktformular.",
    DritterTextBlock: "Wir freuen uns darauf, von dir zu hören!",
    Button: "Weiter zum Kontaktformular",
    Telefonnummer: "02151-9424700"
  };


  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }

  constructor() {
    this.loadData();
  }

  private loadData() {
    fetch('https://osteo-server-app.onrender.com/api/kontakt-previews')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && Array.isArray(data.data) && data.data[0]) {
          this.dataJson = data.data[0];
          
        } else {
          console.warn("Unerwartete Datenstruktur, Fallback wird verwendet.");
          this.dataJson = this.defaultData;
        }
      })
      .catch(error => {
        console.error("Fehler beim Laden der Daten:", error);
        this.dataJson = this.defaultData;
      });
  }
}
