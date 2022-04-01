import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestArrivalsComponent } from './newest-arrivals.component';

describe('NewestArrivalsComponent', () => {
  let component: NewestArrivalsComponent;
  let fixture: ComponentFixture<NewestArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestArrivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
