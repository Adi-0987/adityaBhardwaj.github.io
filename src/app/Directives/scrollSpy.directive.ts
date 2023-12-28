import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const sections = ['home', 'aboutme', 'education', 'work', 'skills', 'contact'];
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && this.isElementInViewport(element)) {
        this.setActiveClass(section);
        break;
      }
    }
  }

  private isElementInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private setActiveClass(section: string): void {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem: Element) => {
      this.renderer.removeClass(navItem, 'active');
    });

    const activeNavItem = document.querySelector(`.nav-item[href="#${section}"]`);
    if (activeNavItem) {
      this.renderer.addClass(activeNavItem, 'active');
    }
  }
}
