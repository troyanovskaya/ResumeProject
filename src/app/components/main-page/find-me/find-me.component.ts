import { Component } from '@angular/core';
import { Icon } from 'src/app/schemas/icon';

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.scss']
})
export class FindMeComponent {
 icon:Icon = {
  name: 'Linkedin',
  path: 'assets/linkedin.png',
  link: 'https://www.linkedin.com/in/anastasiia-troianovska-bb4919234/',
  alias: 'linkedin'
}
}
