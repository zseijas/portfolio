import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FadeInUpDirective } from '../../directives/fade-in-up.directive';
import { SKILLS } from '../../data/skills';
import { SkillCategory } from '../../data/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FadeInUpDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly skills: SkillCategory[] = SKILLS;
}
