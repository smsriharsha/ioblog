import { TestBed } from '@angular/core/testing';

import { ProjserviceService } from './projservice.service';

describe('ProjserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjserviceService = TestBed.get(ProjserviceService);
    expect(service).toBeTruthy();
  });
});
