import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(private element: ElementRef, 
    private BreakpointObserver: BreakpointObserver) {
      this.BreakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) =>{
        for (let Breakpoint of Object.keys(result.Breakpoints)){
          if (result.Breakpoints[Breakpoint]){
            if (Breakpoint = Breakpoints.HandsetPortrait){
              this.element.nativeElement.classList.remove('pc');
            }

            if (Breakpoint = Breakpoints.WebLandscape){
              this.element.nativeElement.classList.add('pc');
            }
          }
        }
      }
    })
     }

}
