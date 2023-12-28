import { Component } from '@angular/core';
import { Education } from '../Models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Chitkara University, Punjab',
      course: 'MBA Heathcare Management',
      duration: '2022-2024',
      specialization: 'Digital Health',
    },
    {
      institute: 'GLA University, Mathura',
      course: 'Bachelors of Pharmacy',
      duration: '2018-2022',
      specialization: 'Pharmacy',
    },
    {
      institute: 'St. Fidelis Sr. Sec. School, Aligarh',
      course: 'Intermediate',
      duration: '2017-2018',
      specialization: 'Science',
    },
    {
      institute: 'St. Fidelis Sr. Sec. School, Aligarh',
      course: 'High School',
      duration: '2015-2016',
      specialization: 'Science',
    }
  ]
  
}
