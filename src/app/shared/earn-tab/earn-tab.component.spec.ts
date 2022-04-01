import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnTabComponent } from './earn-tab.component';

describe('EarnTabComponent', () => {
  let component: EarnTabComponent;
  let fixture: ComponentFixture<EarnTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
