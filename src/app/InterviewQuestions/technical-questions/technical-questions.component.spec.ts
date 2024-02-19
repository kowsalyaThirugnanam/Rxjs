import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalQuestionsComponent } from './technical-questions.component';

describe('TechnicalQuestionsComponent', () => {
  let component: TechnicalQuestionsComponent;
  let fixture: ComponentFixture<TechnicalQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
