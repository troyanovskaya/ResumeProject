import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header-slide',
  templateUrl: './header-slide.component.html',
  styleUrls: ['./header-slide.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('delayFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 1s ease-in', style({ opacity: 1 })) // 1s delay added here
      ])
    ])
  ]
})
export class HeaderSlideComponent implements OnInit {
  loaded = false;

  ngOnInit() {
    this.loaded = true; // Trigger animations when component is initialized
  }

}
