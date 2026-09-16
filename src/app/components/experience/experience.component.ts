import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FadeInUpDirective } from '../../directives/fade-in-up.directive';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../../data/experiences';
import { Experience } from '../../data/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FadeInUpDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly experiences: Experience[] = EXPERIENCES;
  readonly education = EDUCATION;
  readonly certifications: string[] = CERTIFICATIONS;
}
