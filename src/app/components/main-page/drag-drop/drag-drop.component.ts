import { Component} from '@angular/core';



@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],

})
export class DragDropComponent{

  nodes = [
    { id: 1, name: 'Firebase', src: 'assets/instruments/firebase.png'},
    { id: 2, name: 'GitHub', src: 'assets/instruments/github.png'},
    { id: 3, name: 'Render', src: 'assets/instruments/render.png'},
    { id: 4, name: 'Angular', src: 'assets/instruments/angular.png'},
    { id: 5, name: 'Nodejs', src: 'assets/instruments/nodejs.png',},
    {id: 6, name: 'Animations'},
    {id: 7, name: 'Validator'},
    {id: 8, name: 'Forms'},
    {id: 9, name: 'HttpClient'},
  ];
  subnodes = [
    {id: 6, name: 'Animations'},
    {id: 7, name: 'Validator'},
    {id: 8, name: 'Forms'},
    {id: 9, name: 'Animations'},
  ]

}
