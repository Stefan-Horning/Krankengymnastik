import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';
import { StefanPreComponent } from '../stefan-pre/stefan-pre.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,ContactPreComponent,StefanPreComponent,RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
  
})
export class TeamComponent implements OnInit{

  currentIndex = 0;
  intervalId: any;
  currentText: string = "";
  images: string[] = [
    'assets/img/people/Siglinde.jpg',
    'assets/img/people/Simone.jpg',
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 550,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }
  names: string[] = [
    'Siglinde Kämper',
    'Simone Kirches',
  ];
  
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
        'Ausbildung in Osteopathie an der Still-Academy in Oberhausen mit Abschluss in 2018',
        'Weiterbildung zum Lymph- und Ödemtherapeut nach Asdonk mit Abschluss in 2018'
      ]
    },
    {
      name: 'Julia Mainz',
      header: 'Physiotherapeutin, Lymph- und Ödemtherapeutin',
      trainings: [
        'Ausbildung zur Staatl. Geprüft. Gymnastiklehrerin an der Weber Schule in Düsseldorf mit Abschluss im Juni 1998',
        'Ausbildung zur Physiotherapeutin bei maxQ. im BfW in Essen mit Abschluss Staatl. Geprüft.  Physiotherapeutin im Oktober 2008',
        'Zertifikatsfortbildung in Lymph- und Ödemtherapie an der Asdonk Schule Essen in 2009',
        'Fortbildung in Gerätegestützter Krankengymnastik - KGG im Mai 2009'
      ]
    },
    {
      name: 'Philip Heinrichs',
      header: 'Physiotherapeut',
      trainings: [
        'Ausbildung zum Physiotherapeuten an der Schule für Physiotherapie am EVK Düsseldorf mit Abschluss Staatl. Geprüft. Physiotherapeut in 2021',
        'Fortbildung Kinesiologisches Tapen - Kompaktkurs in 2019',
        'Fortbildung Functional Kinetics nach Dr. Klein-Vogelbach an der Uni Basel (Kurse Basic + Status) in 2019',
        'Zertifikatsfortbildung Manuelle Lymphdrainage/Komplexe Physikalische Entstauungstherapie in 2021',
        'Anbieterqualifikation des Leitfadens Prävention in 2021',
        'Zertifikatsfortbildung Gerätegestützte Krankengymnastik - KGG in 2023',
        'Esports Health and Performance Institute - EHPI Foundation + EHPI Medical (seit 04/23 anerkannter EHPI-M Expert)'
      ]
    },
    {
      name: 'Ulla Mügge',
      header: 'Physiotherapeutin',
      trainings: [
        'Ausbildung zur Physiotherapeutin an der Professor-Greve Schule in Bad Iburg von 1985-1987, Examen und Anerkennungsjahr im Klinikum Reinkenheide in Bremerhaven, staatliche Anerkennung seit 1.4.1988',
        'Zertifikatsfortbildung Bobath-Konzept für Erwachsene in Wijchen (NL) in 1999',
        'Zertifikatsfortbildung in Manueller Therapie in 2004',
        'Zertifikatsfortbildung in Manueller Lymphdrainage nach Dr. Vodder in 2007',
        'Fortbildung Sanfter Chiropraktik nach Mutzhas in 2011',
        'Fortbildung CMD (Craniomandibuläre Dysfunktion) in 2013',
        'Fortbildung Palliativ Care für Physiotherapeuten in 2017',
        'Weitere Fortbildungen in den Bereichen: <br> Medizinische Trainingstherapie MTT, Beckenbodentraining, Vestibulartraining, Akupressur, Fußreflexzonentherapie, Atemtherapie, Kinesiotape'
      ]
    }
  ];
}
