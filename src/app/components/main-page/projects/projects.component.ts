import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ ProjectComponent ]
})
export class ProjectsComponent {
  projects = [{title: 'Book Nook', subtitle: 'Book recommendation system', src: 'assets/projects/logo1.png'},];
}
