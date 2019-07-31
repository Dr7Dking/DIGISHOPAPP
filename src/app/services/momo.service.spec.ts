import { TestBed } from '@angular/core/testing';

import { MomoService } from './momo.service';

describe('MomoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MomoService = TestBed.get(MomoService);
    expect(service).toBeTruthy();
  });
});
