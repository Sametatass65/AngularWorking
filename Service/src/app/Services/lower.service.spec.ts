import { TestBed } from '@angular/core/testing';

import { LowerService } from './lower.service';

describe('LowerService', () => {
  let service: LowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
