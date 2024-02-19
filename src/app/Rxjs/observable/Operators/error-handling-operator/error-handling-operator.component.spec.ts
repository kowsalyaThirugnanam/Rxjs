import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingOperatorComponent } from './error-handling-operator.component';

describe('ErrorHandlingOperatorComponent', () => {
  let component: ErrorHandlingOperatorComponent;
  let fixture: ComponentFixture<ErrorHandlingOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlingOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlingOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
