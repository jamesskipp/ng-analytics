import { Component, OnInit, OnDestroy } from '@angular/core';

import * as fromApp from 'src/app/store/app.reducer';
import * as EventsActions from '../../store/events.actions';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { WebAppEvent } from '../../models/web-app-event.model';

@Component({
  selector: 'app-events-actions',
  templateUrl: './events-actions.component.html',
  styleUrls: ['./events-actions.component.scss'],
})
export class EventsActionsComponent implements OnInit, OnDestroy {
  private selectedEvents: WebAppEvent[];
  private focusedEvent: WebAppEvent;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('events').pipe(
      tap((state) => {
        this.selectedEvents = state.selectedEvents;
        this.focusedEvent = state.focusedEvent;
      })
    );
  }

  ngOnDestroy(): void {
    // this.storeSub.unsubscribe();
  }

  onClickDelete(): void {
    this.store.dispatch(new EventsActions.DeleteEvent());
  }
}
