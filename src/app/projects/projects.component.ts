import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideInOut', [
      state('left', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('right', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('center', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* => *', animate('300ms ease-in-out'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  selectedContent: string = 'accessHealth';
  animationDirection: 'left' | 'right' | 'center' = 'center';

  ngOnInit() {
    // Set 'accessHealth' as the default selected button when the component is initialized
    this.showContent('accessHealth');
  }

  showContent(content: string): void {
    if (content === this.selectedContent) {
      return; // Do nothing if clicking the active button
    }

    // Determine the animation direction based on the current and selected content
    this.animationDirection = this.getContentDirection(this.selectedContent, content);

    // Set the selected content
    this.selectedContent = content;
  }

  private getContentDirection(currentContent: string, newContent: string): 'left' | 'right' {
    const currentIndex = this.getButtonIndex(currentContent);
    const newIndex = this.getButtonIndex(newContent);

    return currentIndex < newIndex ? 'right' : 'left';
  }

  private getButtonIndex(content: string): number {
    // You might want to customize this logic based on your actual button order
    return ['accessHealth', 'pharmIT', 'newGen', 'articles'].indexOf(content);
  }
}
