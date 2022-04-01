import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnPassiveIncomeComponent } from './earn-passive-income.component';

describe('EarnPassiveIncomeComponent', () => {
  let component: EarnPassiveIncomeComponent;
  let fixture: ComponentFixture<EarnPassiveIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnPassiveIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnPassiveIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
