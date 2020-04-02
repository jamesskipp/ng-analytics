import { Component, OnInit } from '@angular/core';

import * as fromApp from 'src/app/store/app.reducer';
import * as EventsActions from '../../store/events.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new EventsActions.FetchEvents());
  }
}
