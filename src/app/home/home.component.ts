import { Component,HostBinding,OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  openResume() {
    // Replace 'resume.pdf' with the path to your PDF file
    const pdfUrl = 'assets/AdityaBhardwaj_Resume.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  }
  scrollToContact() {
    // You can adjust the offset as needed
    const contactOffset = 4500;

    // Use smooth scrolling to scroll to the contact section
    window.scrollTo({
      top: contactOffset,
      behavior: 'smooth'
    });
  }
}
