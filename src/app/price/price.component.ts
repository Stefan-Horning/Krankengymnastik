import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactPreComponent } from '../contact-pre/contact-pre.component';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule,ContactPreComponent],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  priceList = [
    { description: 'KG - Krankengymnastik (Termindauer 20 min.)', price: '40,00 €' },
    { description: 'KG - Krankengymnastik (Termindauer 30 min. = 2x 15 min.)', price: '54,00 €' },
    { description: 'Zuzahlung Krankengymnastik (Termindauer 20 min. -> 30 min.)', price: '14,00 €' },
    { description: 'MT - Manuelle Therapie (Termindauer 20 min.)', price: '48,00 €' },
    { description: 'MT - Manuelle Therapie (Termindauer 30 min. = 2x 15 min.)', price: '65,00 €' },
    { description: 'Zuzahlung Manuelle Therapie (Termindauer 20 min. -> 30 min.)', price: '17,00 €' },
    { description: 'MLD - Manuelle Lymphdrainage (Termindauer 30 min.)', price: '49,00 €' },
    { description: 'MLD - Manuelle Lymphdrainage (Termindauer 45 min.)', price: '73,00 €' },
    { description: 'MLD - Manuelle Lymphdrainage (Termindauer 60 min.)', price: '97,00 €' },
    { description: 'Kompressionsbandagierung', price: '31,00 €' },
    { description: 'KG ZNS - Neuro. Krankengymnastik (Termindauer 30 min.)', price: '64,00 €' },
    { description: 'Osteopathie (Termindauer 30 min.)', price: '65,00 €' },
    { description: 'Osteopathie (Termindauer 60 min.)', price: '125,00 €' },
    { description: 'Zuzahlung für Osteopathie 30 min. bei KG-Verordnung', price: '38,00 €' },
    { description: 'Zuzahlung für Osteopathie 30 min. bei MT-Verordnung', price: '32,00 €' },
    { description: 'Ausführlicher Bericht (Arzt/Versicherung)', price: '92,00 €' },
    { description: '(Stand 02/2024)', price: '' }
  ];
}
