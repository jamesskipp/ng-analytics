import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { EventsRoutingModule } from './events-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { EventsActionsComponent } from './components/events-actions/events-actions.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [EventsGridComponent, EventsActionsComponent, EventsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EventsRoutingModule,
    AgGridModule.withComponents([]),
  ],
})
export class EventsModule {}
