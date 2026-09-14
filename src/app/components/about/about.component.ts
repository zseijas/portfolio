import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { SKILLS } from '../../data/skills';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, MatIconModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly highlights = SKILLS.map(s => s.category);
}
