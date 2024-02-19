import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityOperatorComponent } from './utility-operator.component';

describe('UtilityOperatorComponent', () => {
  let component: UtilityOperatorComponent;
  let fixture: ComponentFixture<UtilityOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
