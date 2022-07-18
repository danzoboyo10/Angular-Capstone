import { Component, OnInit, Input } from '@angular/core';
import { StudyTypes } from 'src/app/Study-item';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-study-item',
  templateUrl: './study-item.component.html',
  styleUrls: ['./study-item.component.css']
})
export class StudyItemComponent implements OnInit {
  @Input() studyItem!: StudyTypes 
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
