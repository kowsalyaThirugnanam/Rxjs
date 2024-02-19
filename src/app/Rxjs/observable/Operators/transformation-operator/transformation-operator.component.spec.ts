import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationOperatorComponent } from './transformation-operator.component';

describe('TransformationOperatorComponent', () => {
  let component: TransformationOperatorComponent;
  let fixture: ComponentFixture<TransformationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
