import { TestBed, inject } from '@angular/core/testing';

import { FuildService } from './fuild.service';

describe('FuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuildService]
    });
  });

  it('should be created', inject([FuildService], (service: FuildService) => {
    expect(service).toBeTruthy();
  }));
});
