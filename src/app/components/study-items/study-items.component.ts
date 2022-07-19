import { Component, OnInit } from '@angular/core';
import { StudyItemService } from 'src/app/services/study-item.service';
import { StudyTypes } from 'src/app/Study-item';

@Component({
  selector: 'app-study-items',
  templateUrl: './study-items.component.html',
  styleUrls: ['./study-items.component.css']
})
export class StudyItemsComponent implements OnInit {
  studyItems : StudyTypes[] = [];

  constructor(private studyItemService: StudyItemService) { }

  ngOnInit(): void {
    this.studyItemService.getStudyItems().subscribe((studyItems) => this.studyItems = studyItems)
 
  }

}
