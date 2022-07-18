import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyItemComponent } from './study-item.component';

describe('StudyItemComponent', () => {
  let component: StudyItemComponent;
  let fixture: ComponentFixture<StudyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
