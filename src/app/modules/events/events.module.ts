import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { EventsRoutingModule } from './events-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { EventsActionsComponent } from './components/events-actions/events-actions.component';
import { EventsComponent } from './components/events/events.component';
import { EventsFocusComponent } from './components/events-focus/events-focus.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { ComponentPreviewDirective } from './directives/component-preview.directive';

@NgModule({
  declarations: [
    EventsGridComponent,
    EventsActionsComponent,
    EventsComponent,
    EventsFocusComponent,
    EventCardComponent,
    ComponentPreviewDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EventsRoutingModule,
    AgGridModule.withComponents([]),
  ],
})
export class EventsModule {}
