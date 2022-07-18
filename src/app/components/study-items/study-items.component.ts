import { Component, OnInit } from '@angular/core';
import { StudyTypes } from 'src/app/Study-item';
import { STUDYITEMS } from 'src/app/mock-study-items';

@Component({
  selector: 'app-study-items',
  templateUrl: './study-items.component.html',
  styleUrls: ['./study-items.component.css']
})
export class StudyItemsComponent implements OnInit {
  studyItems : StudyTypes[] = STUDYITEMS

  constructor() { }

  ngOnInit(): void {
  }

}
