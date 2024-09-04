import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HighlightText]'
})
export class HighlightTextDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const container = this.el.nativeElement; // Reference to the container
    const follower = container.querySelector('.follower'); // Reference to the follower element

    if (follower) {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      // Log values for debugging
      // Set CSS variables directly on the follower element
      this.renderer.setStyle(follower, 'display', `block`);
      this.renderer.setStyle(follower, 'top', `${y}px`);
      this.renderer.setStyle(follower, 'left', `${x}px`);

    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    const container = this.el.nativeElement; // Reference to the container
    const follower = container.querySelector('.follower'); // Reference to the follower element
    if (follower) {
      // Hide the follower when mouse leaves the container
      this.renderer.setStyle(follower, 'display', 'none');
    }
  }


}
