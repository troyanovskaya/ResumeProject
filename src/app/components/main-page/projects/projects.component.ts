import { Component, inject } from '@angular/core';
import { Project } from 'src/app/schemas/project';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  dataService = inject(DataService);
  projects: Project[] = this.dataService.getProjects();
}
