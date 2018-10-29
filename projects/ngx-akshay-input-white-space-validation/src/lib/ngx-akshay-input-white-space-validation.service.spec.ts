import { TestBed, inject } from '@angular/core/testing';

import { NgxAkshayInputWhiteSpaceValidationService } from './ngx-akshay-input-white-space-validation.service';

describe('NgxAkshayInputWhiteSpaceValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAkshayInputWhiteSpaceValidationService]
    });
  });

  it('should be created', inject([NgxAkshayInputWhiteSpaceValidationService], (service: NgxAkshayInputWhiteSpaceValidationService) => {
    expect(service).toBeTruthy();
  }));
});
