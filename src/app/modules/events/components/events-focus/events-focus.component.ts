import { Component, OnInit } from '@angular/core';

import * as fromApp from 'src/app/store/app.reducer';
import * as EventsActions from '../../store/events.actions';
import { Store } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { WebAppEvent } from '../../models/web-app-event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events-focus',
  templateUrl: './events-focus.component.html',
  styleUrls: ['./events-focus.component.scss'],
})
export class EventsFocusComponent implements OnInit {
  focusedEvent: Observable<WebAppEvent>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.focusedEvent = this.store
      .select('events')
      .pipe(map((state) => state.focusedEvent));
  }
}
