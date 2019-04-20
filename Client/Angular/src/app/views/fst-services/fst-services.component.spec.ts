import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstServicesComponent } from './fst-services.component';

describe('FstServicesComponent', () => {
  let component: FstServicesComponent;
  let fixture: ComponentFixture<FstServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
