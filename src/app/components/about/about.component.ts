import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FadeInUpDirective } from '../../directives/fade-in-up.directive';
import { SKILLS } from '../../data/skills';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, TranslatePipe, FadeInUpDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly highlights = SKILLS.map(s => s.category);
}
