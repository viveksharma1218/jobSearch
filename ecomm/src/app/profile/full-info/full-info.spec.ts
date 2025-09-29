import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInfo } from './full-info';

describe('FullInfo', () => {
  let component: FullInfo;
  let fixture: ComponentFixture<FullInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
