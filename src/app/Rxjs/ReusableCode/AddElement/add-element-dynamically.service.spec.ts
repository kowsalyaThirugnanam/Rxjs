import { TestBed } from '@angular/core/testing';

import { AddElementDynamicallyService } from './add-element-dynamically.service';

describe('AddElementDynamicallyService', () => {
  let service: AddElementDynamicallyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddElementDynamicallyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
