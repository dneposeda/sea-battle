import { TestBed, inject } from '@angular/core/testing';

import { FieldService } from './fuild.service';

describe('FuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldService]
    });
  });

  it('should be created', inject([FieldService], (service: FieldService) => {
    expect(service).toBeTruthy();
  }));
});
