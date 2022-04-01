import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedByMillionsComponent } from './used-by-millions.component';

describe('UsedByMillionsComponent', () => {
  let component: UsedByMillionsComponent;
  let fixture: ComponentFixture<UsedByMillionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedByMillionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedByMillionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
