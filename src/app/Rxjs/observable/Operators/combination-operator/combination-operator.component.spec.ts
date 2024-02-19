import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationOperatorComponent } from './combination-operator.component';

describe('CombinationOperatorComponent', () => {
  let component: CombinationOperatorComponent;
  let fixture: ComponentFixture<CombinationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
