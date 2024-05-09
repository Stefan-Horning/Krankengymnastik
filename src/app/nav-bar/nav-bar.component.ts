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

  switch() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  stop(event: Event) {
    event.stopPropagation();
  }
}
