import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{
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
    this.http.get<{ data: any[] }>('./assets/impressums.json').subscribe(data => {
      this.dataJson = data.data[0];
    });
  }

  private loadData() {
    const url = 'https://api.osteomedica-toenisvorst.de/getJSON.php?table=impressum';
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
