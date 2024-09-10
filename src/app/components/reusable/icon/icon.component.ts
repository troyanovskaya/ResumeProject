import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/schemas/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon?: Icon;
  redirectToLink(){
    if(this.icon?.link){
      window.open(this.icon.link, '_blank');
    }

  }
}
