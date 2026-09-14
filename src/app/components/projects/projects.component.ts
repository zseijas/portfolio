import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../data/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;
}
