import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudyTypes } from 'src/app/Study-item';
import { STUDYITEMS } from 'src/app/mock-study-items';

@Injectable({
  providedIn: 'root'
})
export class StudyItemService {

  constructor() { }

  getStudyItems(): Observable <StudyTypes[]> {
    const studyItems = of(STUDYITEMS);
    return studyItems;
  }
}
