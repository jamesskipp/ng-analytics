import { WebAppEvent } from '../models/web-app-event.model';
import * as EventsActions from './events.actions';

export interface State {
  events: WebAppEvent[];
  selectedEvents: WebAppEvent[];
  focusedEvent: WebAppEvent;
  loading: boolean;
}

const initialState: State = {
  events: [],
  selectedEvents: [],
  focusedEvent: null,
  loading: false,
};

export function eventsReducer(
  state = initialState,
  action: EventsActions.Type
) {
  switch (action.type) {
    case EventsActions.SELECT_EVENTS:
      return {
        ...state,
        selectedEvents: [...action.payload],
      };
    case EventsActions.FOCUS_EVENT:
      return {
        ...state,
        focusedEvent: action.payload,
      };
    case EventsActions.DEFOCUS_EVENT:
      return {
        ...state,
        focusedEvent: null,
      };
    case EventsActions.DELETE_EVENT:
      return {
        ...state,
      };
    case EventsActions.FETCH_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case EventsActions.SET_EVENTS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    default:
      return { ...state };
  }
}
