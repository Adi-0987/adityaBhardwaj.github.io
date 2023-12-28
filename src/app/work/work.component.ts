import { Component,OnInit } from '@angular/core';
import { Education, Work } from '../Models/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  workList: Work[] = [
    {
      role: 'Implenetation Research Intern' ,
      company: 'ACCESS Health International, New Delhi' ,
      duration: '6 Months (June ‘23 - December ’23)' ,
      description: [
        'Worked with multiple teams and developed API demo, Secondary research documentation and Dashboards for data analysis',
        'Worked on different technologies such as (Git, Gitbook, UI/UX, Angular.js, Node.js, Tableau)'
      ]
    },
    {
      role: 'Consultant Trainee' ,
      company: 'Religare Health Insurance Company Ltd., Gurugram' ,
      duration: '6 Months (March ‘21 - September ’21)' ,
      description: [
        'Worked with claims team and gained knowledge and experience of Healthcare Insurance',
        'Worked as a Data Entry Operator'
      ]
    },
    {
      role: 'Industrial Trainee' ,
      company: 'AKUMS Drugs & Pharmaceuticals Ltd., Haridwar' ,
      duration: '45 Days (May ‘21 - July ’21)' ,
      description: [
        'Worked on assignment of report writing on the topic - Solid Dosage Form',
        'Observed and gained knowledge of Pharma Industry'
      ]
    },
    {
      role: 'Video Editor Intern' ,
      company: 'GLA University, Mathura' ,
      duration: '6 Months (April ‘21 - September ’21)' ,
      description: [
        'Worked with Media-Cell@GLAU for colaborations and creations of testimonial videos',
        'Worked on multiple Technologies such as (Adobe Photoshop, Adobe Aftereffects, CANVA, Abobe Premiere, Adobe Illustrator)'
      ]
    },
  ]
}
