import { Component, inject } from '@angular/core';
import { Icon } from 'src/app/schemas/icon';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.scss']
})
export class FindMeComponent {
  dataService = inject(DataService);
 icons:Icon[] = this.dataService.getFindMe();
 gmail:Icon = this.dataService.getGmail();
 statusMessage = '';

 copyToClipboard(icon:Icon) {
  if(icon.alias == 'gmail'){
    const stringToCopy = icon.link;
    navigator.clipboard.writeText(stringToCopy).then(() => {
      this.statusMessage = 'Email copied to clipboard!';
      setTimeout(()=>{
        this.statusMessage = '';
      }, 1000)
    }).catch((err) => {
      this.statusMessage = 'Failed to copy email.';
      setTimeout(()=>{
        this.statusMessage = '';
      }, 1000)
      console.error('Error:', err);
    });
  }

 }

}
