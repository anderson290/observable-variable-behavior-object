import { TestBed } from '@angular/core/testing';

import { BehavorService } from './behavor.service';

describe('BehavorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehavorService = TestBed.get(BehavorService);
    expect(service).toBeTruthy();
  });
});
