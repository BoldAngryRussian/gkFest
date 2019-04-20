import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstDashboardComponent } from './fst-dashboard.component';

describe('FstDashboardComponent', () => {
  let component: FstDashboardComponent;
  let fixture: ComponentFixture<FstDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
