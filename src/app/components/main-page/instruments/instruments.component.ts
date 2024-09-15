import { Component, inject} from '@angular/core';
import { Icon } from 'src/app/schemas/icon';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss'],
  animations: [
    trigger('iconAnimation', [
      transition(':enter', [
        query('.icon', [
          style({ opacity: 0, transform: 'scale(0.5)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ])
      ])
    ])
  ]
})
export class InstrumentsComponent {
  dataService = inject(DataService);
  icons: Icon[] = this.dataService.getIcons();


}
