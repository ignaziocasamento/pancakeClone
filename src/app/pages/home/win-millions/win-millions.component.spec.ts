import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinMillionsComponent } from './win-millions.component';

describe('WinMillionsComponent', () => {
  let component: WinMillionsComponent;
  let fixture: ComponentFixture<WinMillionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinMillionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinMillionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
