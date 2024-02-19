import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOperatorComponent } from './creation-operator.component';

describe('CreationOperatorComponent', () => {
  let component: CreationOperatorComponent;
  let fixture: ComponentFixture<CreationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
