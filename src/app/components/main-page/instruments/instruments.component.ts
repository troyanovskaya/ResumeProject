import { Component } from '@angular/core';
import { Icon } from 'src/app/schemas/icon';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

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
  icons: Icon[] = [{name: 'VS Code', path: 'assets/instruments/vs_code.png', link:'https://code.visualstudio.com/', alias: 'vs_code'},
    {name: 'GitHub', path: 'assets/instruments/github.png', link: 'https://github.com/troyanovskaya', alias: 'github'},
    {name: 'MobgoDB', path: 'assets/instruments/mongodb.png', link: 'https://www.mongodb.com/', alias: 'mongodb'},
    {name: 'Postman', path: 'assets/instruments/postman.png', link: 'https://www.postman.com/', alias: 'postman'},
    {name: 'Firebase', path: 'assets/instruments/firebase.png', link: 'https://firebase.google.com/', alias: 'firebase'},
    {name: 'Render', path: 'assets/instruments/render.png', link: 'https://docs.render.com/', alias: 'render'},
    {name: 'Angular', path: 'assets/instruments/angular.png', link: 'https://angular.dev/', alias: 'angular'},
    {name: 'Material', path: 'assets/instruments/material.png', link: 'https://material.angular.io/', alias: 'material'},
    {name: 'Nodejs', path: 'assets/instruments/nodejs.png', link: 'https://nodejs.org/', alias: 'nodejs'},
    {name: 'Express.js', path: 'assets/instruments/expressjs.png', link: 'https://expressjs.com/', alias: 'expressjs'}
  ]

}
