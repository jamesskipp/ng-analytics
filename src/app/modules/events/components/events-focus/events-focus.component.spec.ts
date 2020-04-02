import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFocusComponent } from './events-focus.component';

describe('EventsFocusComponent', () => {
  let component: EventsFocusComponent;
  let fixture: ComponentFixture<EventsFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
