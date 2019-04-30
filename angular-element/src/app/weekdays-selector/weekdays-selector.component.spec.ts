import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysSelectorComponent } from './weekdays-selector.component';

describe('WeekdaysSelectorComponent', () => {
  let component: WeekdaysSelectorComponent;
  let fixture: ComponentFixture<WeekdaysSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdaysSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdaysSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
