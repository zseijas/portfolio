import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

interface NavLink {
  key: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, MatToolbarModule, MatButtonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly links: NavLink[] = [
    { key: 'nav.about', fragment: 'about' },
    { key: 'nav.projects', fragment: 'projects' },
    { key: 'nav.experience', fragment: 'experience' },
    { key: 'nav.skills', fragment: 'skills' },
    { key: 'nav.contact', fragment: 'contact' }
  ];

  constructor(readonly i18n: TranslationService) {}

  toggleLang(): void {
    this.i18n.toggle();
  }
}
