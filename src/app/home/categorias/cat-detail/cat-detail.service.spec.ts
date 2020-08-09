import { TestBed } from '@angular/core/testing';

import { CatDetailService } from './cat-detail.service';

describe('CatDetailService', () => {
  let service: CatDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
