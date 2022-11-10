import { TestBed } from '@angular/core/testing';

import { AllbookingsService } from './allbookings.service';

describe('AllbookingsService', () => {
  let service: AllbookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllbookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
