import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isBrowser: boolean = false; // Initialize with a default value

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  openResume() {
    // Replace 'resume.pdf' with the path to your PDF file
    const pdfUrl = 'assets/AdityaBhardwaj_Resume.pdf';

    // Open the PDF in a new tab only if in a browser
    if (this.isBrowser) {
      window.open(pdfUrl, '_blank');
    }
  }

  scrollToContact() {
    // You can adjust the offset as needed
    const contactOffset = 4500;

    // Use smooth scrolling to scroll to the contact section only if in a browser
    if (this.isBrowser) {
      window.scrollTo({
        top: contactOffset,
        behavior: 'smooth'
      });
    }
  }
}
