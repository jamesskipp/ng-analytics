import * as fromEvents from '../modules/events/store/events.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  events: fromEvents.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  events: fromEvents.eventsReducer,
};
