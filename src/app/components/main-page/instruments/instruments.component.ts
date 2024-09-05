import { Component } from '@angular/core';
import { Icon } from 'src/app/components/reusable/icon/schemas/icon';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent {
  icons: Icon[] = [{name: 'VS Code', path: 'assets/instruments/vs_code.png', link:'https://code.visualstudio.com/', alias: 'vs_code'},
    {name: 'GitHub', path: 'assets/instruments/github.png', link: 'https://github.com/troyanovskaya', alias: 'github'},
    {name: 'MobgoDB', path: 'assets/instruments/mongodb.png', link: 'https://www.mongodb.com/', alias: 'mongodb'},
    {name: 'Postman', path: 'assets/instruments/postman.png', link: 'https://www.postman.com/', alias: 'postman'},
    {name: 'Firebase', path: 'assets/instruments/firebase.png', link: 'https://firebase.google.com/', alias: 'firebase'},
    {name: 'Render', path: 'assets/instruments/render.png', link: 'https://docs.render.com/', alias: 'render'},
  ]

}
