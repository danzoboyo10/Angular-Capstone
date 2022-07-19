import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { StudyTypes } from 'src/app/Study-item';

const httpChoices = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudyItemService {
  private jsonApiUrl = 'http://localhost:5000/studyitems'

  constructor(private http:HttpClient) { }

  getStudyItems(): Observable <StudyTypes[]> {
    return this.http.get<StudyTypes[]>(this.jsonApiUrl)
  }

  deleteStudyItem(studyItem: StudyTypes): Observable<StudyTypes> {
    const url = `${this.jsonApiUrl}/${studyItem.id}`;
    return this.http.delete<StudyTypes>(url);

  }
  updateStudyItemCompleted(studyItem: StudyTypes): Observable<StudyTypes> {
    const url = `${this.jsonApiUrl}/${studyItem.id}`;
    return this.http.put<StudyTypes>(url, studyItem, httpChoices)
  }
}
