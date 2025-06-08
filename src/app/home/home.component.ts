import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { StefanPreComponent } from '../stefan-pre/stefan-pre.component';
import { Router, RouterLink } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShowTeamComponent } from '../show-team/show-team.component';
import { PricePreComponent } from '../price-pre/price-pre.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContactPreComponent,StefanPreComponent,RouterLink,ShowTeamComponent,PricePreComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'assets/img/Physiotherapie.webp',
    'assets/img/Osteopathie.webp',
    'assets/img/Naturheilpraxis.webp'
  ];


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
    this.currentText = this.text[index]?.['name'] || '';
  }

  text:{ [key: string]: any }[] = [
    { name: "Physiotherapie" },
    { name: "Osteopathie" },
    { name: "Heilkunde" },
  ]

  imagesstyle:string[] = [

  ]
  currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef,private scroller: ViewportScroller,private router: Router) {
    //this.loadDefaultData();
    this.loadData();
  }

     http = inject(HttpClient)
  
  
    loadDefaultData() {
      this.http.get<{ data: any[] }>('./assets/homes.json').subscribe(data => {
        this.dataJson = data.data[0];
      });
    }
    


  ngOnInit(): void {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 550,
    });
  }

  private loadData() {
   const tables = ['home', 'Leistungen','TeamAnzeige']; // Füge hier alle relevanten Tabellen hinzu
  const baseUrl = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=';

  tables.forEach(table => {
    this.http.get<{ data: any[] }>(baseUrl + table).subscribe({
      next: (data) => {
        if (data && data.data && Array.isArray(data.data)) {
          if (table === 'home') {
            this.dataJson = data.data[0];
          } else if (table === 'Leistungen') {
            this.text = data.data;
          } else if (table === 'TeamAnzeige') {
            this.names = data.data;
          }
          console.log(`Daten für Tabelle ${table} erfolgreich geladen:`, data.data);
        } else {
          console.warn(`Unerwartete Datenstruktur für Tabelle ${table}`);
        }
      },
      error: (error) => {
        console.error(`Fehler beim Laden von Tabelle ${table}:`, error);
      }
    });
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
