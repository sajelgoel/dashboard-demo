import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCandleComponent } from './dashboard-candle.component';

describe('DashboardCandleComponent', () => {
  let component: DashboardCandleComponent;
  let fixture: ComponentFixture<DashboardCandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
