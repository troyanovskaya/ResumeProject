import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import { Project } from 'src/app/schemas/project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input() project?: Project;
  readonly panelOpenState1 = signal(false);
  readonly panelOpenState2 = signal(false);
  readonly panelOpenState3 = signal(false);
  readonly panelOpenState4 = signal(false);
  readonly panelOpenState5 = signal(false);
  openTab(link:string | undefined){
    if(link){
      window.open(link, '_blank');
    }
  }
}
