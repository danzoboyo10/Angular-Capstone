import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { StudyTypes } from 'src/app/Study-item';

@Component({
  selector: 'app-add-study-item',
  templateUrl: './add-study-item.component.html',
  styleUrls: ['./add-study-item.component.css']
})
export class AddStudyItemComponent implements OnInit {
  @Output() onAddStudyItem: EventEmitter<StudyTypes> = new EventEmitter()
  text!: string; 
  date!: string;
  completed: boolean = false
  timeSpent!: string;
  focusLevel!: string; 
  productivityLevel!: string;
  showAddStudyItem!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(Value => (this.showAddStudyItem = Value))

   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('please add a task')
      return
    }
  const newStudyItem = {
    text: this.text,
    date: this.date, 
    completed: this.completed,
    timeSpent: this.timeSpent,
    focusLevel: this.focusLevel,
    productivityLevel: this.productivityLevel

  };

  this.onAddStudyItem.emit(newStudyItem);

  this.text = '';
  this.date = '';
  this.completed = false;
  this.timeSpent = '';
  this.focusLevel = '';
  this.productivityLevel = '';



  }

}
