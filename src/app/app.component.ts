import { Component,HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
  private scrolledPercentage: number = 0;
 activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const{scrollTop, scrollHeight} = document.documentElement
    const scrollPercentage = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%'
    const progressBar = document.querySelector('#progress-bar') as HTMLElement | null;
    progressBar?.style.setProperty('--progress', scrollPercentage);
  }
  
}
