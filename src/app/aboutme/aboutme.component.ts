import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit {
  selectedContent: string = 'PersonalDetails';
  ngOnInit() {
    // Set 'PersonalDetails' as the default selected button when the component is initialized
    this.showContent('personalDetails');
    // You can also add other initialization logic here if needed
  }

  showContent(content: string): void {
    this.selectedContent = content;
    
  }
}
