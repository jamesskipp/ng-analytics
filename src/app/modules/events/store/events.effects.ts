import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as EventsActions from './events.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WebAppEvent } from '../models/web-app-event.model';
import { of } from 'rxjs';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  fetchEvents = this.actions$.pipe(
    ofType(EventsActions.FETCH_EVENTS),
    switchMap((action: EventsActions.FetchEvents) => {
      return this.http
        .get<WebAppEvent[]>(environment.urls.webAppEvents.base)
        .pipe(
          map((response) => {
            const events = response;
            return new EventsActions.SetEvents(events);
          }),
          catchError((error) => {
            const message = error.message;
            return of({ type: 'DUMMY' });
            // return of(new EventsActions.FetchEventsFailed(message));
          })
        );
    })
  );
}
