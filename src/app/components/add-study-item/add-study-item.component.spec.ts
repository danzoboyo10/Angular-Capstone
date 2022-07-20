import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudyItemComponent } from './add-study-item.component';

describe('AddStudyItemComponent', () => {
  let component: AddStudyItemComponent;
  let fixture: ComponentFixture<AddStudyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
