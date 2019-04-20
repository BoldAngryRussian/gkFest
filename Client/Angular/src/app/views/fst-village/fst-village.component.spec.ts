import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstVillageComponent } from './fst-village.component';

describe('FstVillageComponent', () => {
  let component: FstVillageComponent;
  let fixture: ComponentFixture<FstVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
