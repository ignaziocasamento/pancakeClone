import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolCollapseComponent } from './pool-collapse.component';

describe('PoolCollapseComponent', () => {
  let component: PoolCollapseComponent;
  let fixture: ComponentFixture<PoolCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
