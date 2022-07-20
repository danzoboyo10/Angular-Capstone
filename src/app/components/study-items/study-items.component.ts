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

  deleteStudyItem(studyItem: StudyTypes) {
    this.studyItemService
    .deleteStudyItem(studyItem)
    .subscribe(
      () => (this.studyItems = this.studyItems.filter((s) => s.id !== studyItem.id)));

  }
  doubleClickCompleted(studyItem: StudyTypes) {
    studyItem.completed = !studyItem.completed;
    this.studyItemService.updateStudyItemCompleted(studyItem).subscribe

  }

  addStudyItem(studyItem: StudyTypes) {
    this.studyItemService.addStudyItem(studyItem).subscribe((studyItem) => (this.studyItems.push(studyItem)));
  }


}
