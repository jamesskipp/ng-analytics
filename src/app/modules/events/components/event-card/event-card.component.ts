import { Component, Input } from '@angular/core';
import { WebAppEvent } from '../../models/web-app-event.model';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  style,
  state,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  animations: [
    trigger('slideOpen', [
      state(
        'open',
        style({
          'max-height': '100px',
          overflow: 'hidden',
        })
      ),
      state(
        'closed',
        style({
          'max-height': '0px',
          'padding-top': '0px',
          'padding-bottom': '0px',
          overflow: 'hidden',
        })
      ),
      transition('open => closed', animate(100)),
      transition('closed => open', animate(100)),
    ]),
  ],
})
export class EventCardComponent {
  @Input() event: WebAppEvent;

  faBars = faBars;

  actionCardState = 'open';

  getEventDate(): Date {
    return new Date(this.event.time);
  }

  openOrClose(component: string): void {
    this[component + 'CardState'] =
      this[component + 'CardState'] === 'open' ? 'closed' : 'open';
  }
}
