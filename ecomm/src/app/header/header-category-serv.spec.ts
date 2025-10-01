import { TestBed } from '@angular/core/testing';

import { HeaderCategoryServ } from './header-category-serv';

describe('HeaderCategoryServ', () => {
  let service: HeaderCategoryServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderCategoryServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
