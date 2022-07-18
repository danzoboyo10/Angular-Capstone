import { TestBed } from '@angular/core/testing';

import { StudyItemService } from './study-item.service';

describe('StudyItemService', () => {
  let service: StudyItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
