import { TestBed } from '@angular/core/testing';

import { HeaderfiltersServ } from './headerfilters-serv';

describe('HeaderfiltersServ', () => {
  let service: HeaderfiltersServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderfiltersServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
