import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [{title: 'Book Nook', subtitle: 'Book recommendation system', src: 'assets/projects/logo1.png'},];
}
