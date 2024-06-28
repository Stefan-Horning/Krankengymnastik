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
        'Ausbildung in Osteopathie an der Still-Academy in Oberhausen mit Abschluss im 2018',
        'Weiterbildung zum Lymph- und Odemtherapeut nach Asdonk mit Abschluss in 2018'
      ]
    },
    {
      name: 'Julia Mainz',
      header: 'Physiotherapeutin, Osteopathin, Lymph- und Ödemtherapeutin',
      trainings: [
        '08/95 - 06/98 Ausbildung zur Staatlicg gepr. Gymnastiklehrerin, Weber Schule in Düsseldorf',
        '10/2005 - 10/2008 Ausbildung zur Physiotherapeutin max Q im BfW in Essen',
        '01/2009 - 02/2009 Fortbildung lymph und Ödemtherapie Asdonk Schule Essen',
        '05/2009 Fortbildung KGG'
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
}
