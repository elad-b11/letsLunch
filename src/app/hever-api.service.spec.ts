import { TestBed } from '@angular/core/testing';

import { HeverApiService } from './hever-api.service';

describe('HeverApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeverApiService = TestBed.get(HeverApiService);
    expect(service).toBeTruthy();
  });
});
