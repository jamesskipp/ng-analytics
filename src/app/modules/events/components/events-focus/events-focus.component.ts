import { Component, OnInit } from '@angular/core';

import * as fromApp from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { WebAppEvent } from '../../models/web-app-event.model';
import { Observable } from 'rxjs';
import {
  style,
  state,
  trigger,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-events-focus',
  templateUrl: './events-focus.component.html',
  styleUrls: ['./events-focus.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('75ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('75ms', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
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
