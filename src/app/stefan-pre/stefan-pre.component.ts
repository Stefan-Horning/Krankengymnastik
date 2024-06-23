import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-stefan-pre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stefan-pre.component.html',
  styleUrls: ['./stefan-pre.component.scss']
})
export class StefanPreComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any;
  currentText: string = "";

  text = [
    {
      name: 'Stefan Paul',
      header: 'Osteopath, Physiotherapeut, Heilpraktiker',
      trainings: [
        'Ausbildung zum Physiotherapeuten am Präha Lehrinstitut für Physiotherapie Kerpen mit Abschluss Staatl. Geprüft. Physiotherapeut im September 2007',
        'Studium an der Hogeschool Zuyd Heerlen mit Abschluss Bachelor in Physiotherapy (NL) im September 2008',
        'Ausbildung in Osteopathie an der International Academy of Osteopathy in Gent (B) Abschluss D.O. in 2014',
        'Sektoraler Heilpraktiker (Physiotherapie) seit 2014',
        'Unbeschränkter Heilpraktiker seit Mai 2017'
      ]
    },
    {
      name: 'Nicolas Mainz',
      header: 'Physiotherapeut, Osteopath, Lymph- und Ödemtherapeut',
      trainings: [
        'Ausbildung zum Physiotherapeuten an der Westfalenakademie in Dortmund mit Abschluss Staatl. Geprüft. Physiotherapeut im Oktober 2010',
        'Ausbildung in Osteopathie an der Still-Academy in Oberhausen mit Abschluss im 2018',
        'Weiterbildung zum Lymph- und Odemtherapeut nach Asdonk mit Abschluss in 2018'
      ]
    },
    {
      name: 'Philip Heinrichs',
      header: 'Physiotherapeut',
      trainings: [
        '2021 Abschluss als staatl. anerkannter Physiotherapeut an der Schule für Physiotherapie am EVK Düsseldorf',
        '2019 Kinesiologisches Tapen - Kompaktkurs',
        '2019 Functional Kinetics nach Dr. Klein-Vogelbach an der Uni Basel (Kurse Basic + Status)',
        '2021 Manuelle Lymphdrainage/KPE',
        '2021 Anbieterqualifikation des Leitfadens Prävention',
        '2023 Gerätegestützte Krankengymnastik, anerkannt zur Abrechnungsposition KG-Gerät',
        '2023 EHPI Foundation + Medical (seit 04/23 anerkannter EHPI-M Expert)'
      ]
    },
    {
      name: 'Ulla Mügge',
      header: 'Physiotherapeutin',
      trainings: [
        'Ausbildung zur Physiotherapeutin an der Professor-Greve Schule in Bad Iburg von 1985-1987, Examen und Anerkennungsjahr im Klinikum Reinkenheide in Bremerhaven, staatliche Anerkennung seit 1.4.1988',
        'Fortbildung Bobath-Konzept für Erwachsene in Wijchen (NL) 1999',
        'Fortbildung Manueller Therapie 2004',
        'Fortbildung Manueller Lymphdrainage nach Dr. Vodder 2007',
        'Fortbildung Sanfter Chiropraktik nach Mutzhas 2011',
        'Fortbildung CMD (Craniomandibuläre Dysfunktion) 2013',
        'Fortbildung Palliativ Care für Physiotherapeuten 2017',
        'Weitere Fortbildungen in den Bereichen: Medizinische Trainingstherapie, Beckenbodentraining, Vestibulartraining, Akupressur, Fußreflexzonentherapie, Atemtherapie, Kinesiotape',
      ]
    }
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 550,
    });

    this.intervalId = setInterval(() => {
      this.changeIndex();
    }, 5000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  changeIndex() {
    const imageElement = document.querySelector('.imageDiv img');
    if (imageElement) {
      imageElement.classList.remove('show');
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.text.length;
        imageElement.classList.add('show');
      }, 1000); // Zeit für den Fade-out
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.text.length;
    }
  }
}