// scroll.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  private threshold = 100;
  private activeSection = '';

  // Define the offsets for each section
  private sectionOffsets: Record<string, number> = {
    'home': 0,
    'aboutme': 700, // Example offset, adjust as needed
    'education': 1350,
    'work': 2050,
    'skills': 2750,
    'projects': 3700,
    'contact': 4500,
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log('Scroll Position:', scrollPosition);

    // Iterate through sectionOffsets directly
    for (const sectionId of Object.keys(this.sectionOffsets)) {
      const sectionTop = this.sectionOffsets[sectionId];
      const sectionBottom = sectionTop + this.threshold; // Adjust as needed

      // console.log(`Section: ${sectionId}, Offset Top: ${sectionTop}, Offset Bottom: ${sectionBottom}, Threshold: ${this.threshold}`);

      if (scrollPosition >= sectionTop - this.threshold && scrollPosition <= sectionBottom) {
        if (this.activeSection !== sectionId) {
          this.activeSection = sectionId;
          this.setActiveLink(this.activeSection);
          console.log(`Active Section: ${this.activeSection}`);
        }
        break;
      }
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const anchorElement = this.findClosestAnchor(event.target as HTMLElement);
    if (anchorElement) {
      event.preventDefault();

      const linkId = anchorElement.getAttribute('href')?.substring(1);
      if (linkId && this.sectionOffsets.hasOwnProperty(linkId)) {
        this.setActiveLink(linkId);
        this.scrollToOffset(linkId);
      }
    }
  }

  private setActiveLink(linkId: string) {
    const navLinks = this.el.nativeElement.querySelectorAll('.nav-item');
    navLinks.forEach((link: any) => {
      this.renderer.removeClass(link, 'active');
    });

    const activeLink = this.el.nativeElement.querySelector(`[routerLink="/${linkId}"]`);
    if (activeLink) {
      this.renderer.addClass(activeLink, 'active');
    }
  }

  private scrollToOffset(linkId: string) {
    const offset = this.sectionOffsets[linkId];
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  private findClosestAnchor(element: HTMLElement): HTMLAnchorElement | null {
    while (element && !element.matches('a')) {
      element = element.parentElement!;
    }
    return element as HTMLAnchorElement | null;
  }
}
