import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsCollapseComponent } from './farms-collapse.component';

describe('FarmsCollapseComponent', () => {
  let component: FarmsCollapseComponent;
  let fixture: ComponentFixture<FarmsCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
