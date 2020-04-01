import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsActionsComponent } from './events-actions.component';

describe('EventsActionsComponent', () => {
  let component: EventsActionsComponent;
  let fixture: ComponentFixture<EventsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
