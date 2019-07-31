import { TestBed } from '@angular/core/testing';

import { BoutiquesService } from './boutiques.service';

describe('BoutiquesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoutiquesService = TestBed.get(BoutiquesService);
    expect(service).toBeTruthy();
  });
});
