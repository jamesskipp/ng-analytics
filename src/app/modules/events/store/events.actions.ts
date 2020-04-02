import { Action } from '@ngrx/store';
import { WebAppEvent } from '../models/web-app-event.model';

export const SELECT_EVENTS = '[Events] Select Events';
export const DELETE_EVENT = '[Events] Delete Event';
export const FOCUS_EVENT = '[Events] Focus Event';
export const DEFOCUS_EVENT = '[Events] Defocus Event';
export const FETCH_EVENTS = '[Events] Fetch Events';
export const SET_EVENTS = '[Events] Set Events';

export class SelectEvents implements Action {
  readonly type = SELECT_EVENTS;

  constructor(public payload: WebAppEvent[]) {}
}

export class FocusEvent implements Action {
  readonly type = FOCUS_EVENT;

  constructor(public payload: WebAppEvent) {}
}

export class DefocusEvent implements Action {
  readonly type = DEFOCUS_EVENT;
}

export class DeleteEvent implements Action {
  readonly type = DELETE_EVENT;
}

export class FetchEvents implements Action {
  readonly type = FETCH_EVENTS;
}

export class SetEvents implements Action {
  readonly type = SET_EVENTS;

  constructor(public payload: WebAppEvent[]) {}
}

export type Type =
  | SelectEvents
  | FocusEvent
  | DefocusEvent
  | DeleteEvent
  | FetchEvents
  | SetEvents;
