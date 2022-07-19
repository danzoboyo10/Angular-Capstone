import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { StudyTypes } from 'src/app/Study-item';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-study-item',
  templateUrl: './study-item.component.html',
  styleUrls: ['./study-item.component.css']
})
export class StudyItemComponent implements OnInit {
  @Input() studyItem!: StudyTypes;
  @Output() onDeleteStudyItem: EventEmitter<StudyTypes> = new EventEmitter();
  @Output() onDblClickCompleted: EventEmitter<StudyTypes> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(studyItem: any) {
    this.onDeleteStudyItem.emit(studyItem);

  }
  onDblClick(studyItem: any) {
    this.onDblClickCompleted.emit(studyItem);
  }

}
