import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { StefanPreComponent } from '../stefan-pre/stefan-pre.component';
import { Router, RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShowTeamComponent } from '../show-team/show-team.component';
import { PricePreComponent } from '../price-pre/price-pre.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContactPreComponent,StefanPreComponent,RouterLink,ShowTeamComponent,PricePreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'assets/img/Physiotherapie.webp',
    'assets/img/Osteopathie.webp',
    'assets/img/Naturheilpraxis.webp'
  ];

  private readonly defaultData = {
    Slogan: "Osteopathie, Physiotherapie & Naturheilkunde",
    Ort: "St. Tönis",
    Ueberschrift: "Herzlich Willkommen bei",
    UnserTeamUeberschrift: "Unser",
    TeamButton: "Werde Teil des Teams",
    UnsereLeistungenUeberschrift: "Unsere",
    LeistungenButton: "Erfahre mehr darüber",
    BuerozeitenUeberschrift: "Unsere",
    ZeitMontag: "von 09:00 bis 13:00 Uhr",
    ZeitDienstag: "von 09:00 bis 13:00 Uhr",
    ZeitMittwoch: "von 09:00 bis 13:00 Uhr",
    ZeitDonnerstag: "von 09:00 bis 13:00 Uhr",
    ZeitFreitag: "von 09:00 bis 13:00 Uhr",
    ZeitWochenende: "geschlossen",
    ErsterTextBlockUeberschrift: "Bei Osteomedica, der Praxis für Osteopathie, Physiotherapie und Heilkunde im Herzen von St.Tönis, ist es unser besonderes Anliegen den Menschen nach einem ganzheitlichen Ansatz zu behandeln und seine Beschwerden auf allen Ebenen zu lindern.",
    ZweiterTextBlockUeberschrift: "Um den Prozess der Heilung beim Patienten umfassend zu aktivieren, nutzen wir Untersuchungs- und Behandlungstechniken aus dem Bereich der Osteopathie sowie der Naturheilkunde und nehmen auch Rücksicht auf die psychoemotionale und seelische Komponente über Behandlungsansätze aus dem Bereich der energetischen Heilweisen.",
    UnserTeamUeberschriftStyle: "Team",
    UnsereLeistungenUeberschriftStyle: "Leistungen",
    BuerozeitenUeberschriftStyle: "Bürozeiten",
    TeamAnzeige: [
      { name: "Stefan Paul" },
      { name: "Nicolas Mainz" },
      { name: "Julia Mainz" },
      { name: "Philip Heinrichs" },
      { name: "Ulla Mügge" }
    ],
    Leistungen: ["Physiotherapie", "Osteopathie", "Heilkunde"]
  };

  dataJson: { [key: string]: any } = { };

  currentText:string = ""

  names = [
    {
      "name": "Stefan Paul"
    },
    {
      "name": "Nicolas Mainz"
    },
    {
      "name": "Julia Mainz"
    },
    {
      "name": "Philip Heinrichs"
    },
    {
      "name": "Ulla Mügge"
    }
  ]
  

  setText(index:number){
    this.currentText = this.text[index];
  }

  text:string[] = [
    "Physiotherapie",
    "Osteopathie",
    "Heilkunde",
  ]

  imagesstyle:string[] = [

  ]
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef,private scroller: ViewportScroller,private router: Router) {

    this.loadData();
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 550,
    });
  }

  private loadData() {
    fetch('https://osteo-server-app.onrender.com/api/homes')
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


  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4750); 
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setText(this.currentImageIndex);
  }

  c1() {
    const inputElement = document.getElementById('c1') as HTMLInputElement;
    if (inputElement.checked) {
      this.router.navigate(['/osteopathie']);
    }
  }

  c2() {
    const inputElement = document.getElementById('c2') as HTMLInputElement;
    if (inputElement.checked) {
      this.router.navigate(['/physiotherapie']);
    }
  }

  c3() {
    const inputElement = document.getElementById('c3') as HTMLInputElement;
    if (inputElement.checked) {
      this.router.navigate(['/heilkunde']);
    }
  }
}
