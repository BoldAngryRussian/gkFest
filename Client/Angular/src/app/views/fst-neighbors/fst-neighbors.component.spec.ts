import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstNeighborsComponent } from './fst-neighbors.component';

describe('FstNeighborsComponent', () => {
  let component: FstNeighborsComponent;
  let fixture: ComponentFixture<FstNeighborsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstNeighborsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstNeighborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
