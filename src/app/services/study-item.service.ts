import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { StudyTypes } from 'src/app/Study-item';

@Injectable({
  providedIn: 'root'
})
export class StudyItemService {
  private jsonApiUrl = 'http://localhost:5000/studyitems'

  constructor(private http:HttpClient) { }

  getStudyItems(): Observable <StudyTypes[]> {
    return this.http.get<StudyTypes[]>(this.jsonApiUrl)
  }
}
