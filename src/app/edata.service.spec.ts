import { TestBed } from '@angular/core/testing';

import { EdataService } from './edata.service';

describe('EdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdataService = TestBed.get(EdataService);
    expect(service).toBeTruthy();
  });
});
