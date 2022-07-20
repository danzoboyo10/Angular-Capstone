import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddStudyItem: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddStudyItem(): void {
    this.showAddStudyItem = !this.showAddStudyItem;
    this.subject.next(this.showAddStudyItem)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
