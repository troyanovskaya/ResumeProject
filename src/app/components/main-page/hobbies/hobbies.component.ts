import { Component } from '@angular/core';
import { Hobby } from 'src/app/schemas/hobby';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  hobbies: Hobby[] = [
    {imgs: ['assets/hobbies/violet1.jpg', 'assets/hobbies/violet2.jpg', 'assets/hobbies/violet3.jpg'], title: 'Plant growing',
      description: ['Even though african violets are not the only plants I am currently growing, the are the most numerous ones. Right now I own more the 30 differnt species. However, due to the accident labels detachments I patiently wait for the first flowers to identify their breed.',
        'All but three of them were grown from leaves and right now they are on the stage of starter (can call it teenage plant) and promise to bloom soon enough.',
        'Besides violets I have two Venus flytraps and one pot of lithops. All together they are threatening not only to take over my room, but the leaving room also'
      ]}
  ]
}
