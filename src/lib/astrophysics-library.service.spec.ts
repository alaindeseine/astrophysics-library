import { TestBed } from '@angular/core/testing';

import { AstrophysicsLibraryService } from './astrophysics-library.service';

describe('AstrophysicsLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstrophysicsLibraryService = TestBed.get(AstrophysicsLibraryService);
    expect(service).toBeTruthy();
  });
});
