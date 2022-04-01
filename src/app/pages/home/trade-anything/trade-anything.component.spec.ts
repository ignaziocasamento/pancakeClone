import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAnythingComponent } from './trade-anything.component';

describe('TradeAnythingComponent', () => {
  let component: TradeAnythingComponent;
  let fixture: ComponentFixture<TradeAnythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeAnythingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
