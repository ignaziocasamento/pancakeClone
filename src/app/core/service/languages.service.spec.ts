import { TestBed } from '@angular/core/testing';

import { LanguagesService } from '../../core/service/languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
