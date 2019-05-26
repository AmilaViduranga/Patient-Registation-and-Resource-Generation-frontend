import { TestBed } from '@angular/core/testing';

import { ApiCallingsService } from './api-callings.service';

describe('ApiCallingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallingsService = TestBed.get(ApiCallingsService);
    expect(service).toBeTruthy();
  });
});
