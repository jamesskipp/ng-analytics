import {
  Component,
  Input,
  OnInit,
  Renderer2,
  Inject,
  ElementRef,
} from '@angular/core';
import { WebAppEvent } from '../../models/web-app-event.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() event: WebAppEvent;

  getEventDate(): Date {
    return new Date(this.event.time);
  }
}
