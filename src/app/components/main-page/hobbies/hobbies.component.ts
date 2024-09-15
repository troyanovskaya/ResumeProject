import { Component, inject } from '@angular/core';
import { Hobby } from 'src/app/schemas/hobby';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  dataService = inject(DataService);
  hobbies: Hobby[] = this.dataService.getHobbies();
}
