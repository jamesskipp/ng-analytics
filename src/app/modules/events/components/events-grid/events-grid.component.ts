import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from 'src/app/store/app.reducer';
import * as EventsActions from '../../store/events.actions';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss'],
})
export class EventsGridComponent implements OnInit {
  events$: Observable<object>;
  private gridApi;

  constructor(private store: Store<fromApp.AppState>) {}

  columnDefs = [
    {
      headerName: 'ID',
      field: 'id',
      sortable: true,
      checkboxSelection: true,
    },
    { headerName: 'Action', field: 'action', filter: true, sortable: true },
    { headerName: 'Label', field: 'label', sortable: true },
    {
      headerName: 'Component',
      valueGetter: (params) => {
        return params.data.component && params.data.component.name;
      },
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Parent',
      valueGetter: (params) => {
        return params.data.component && params.data.component.parentName;
      },
      sortable: true,
      filter: true,
    },
    {
      headerName: 'URL',
      valueGetter: (params) => {
        return params.data.page && params.data.page.url;
      },
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Date',
      field: 'time',
      sortable: true,
      valueFormatter: (params) => {
        return new Date(params.value);
      },
    },
    {
      headerName: 'User',
      valueGetter: (params) => {
        return params.data.user && params.data.user.email;
      },
      sortable: true,
      filter: true,
    },
  ];

  ngOnInit(): void {
    this.events$ = this.store.select('events').pipe(
      map((eventsState) => {
        return eventsState.events;
      })
    );
  }

  onGridReady(params): void {
    this.gridApi = params.api;
  }

  onSelectionChanged(event): void {
    const selectedEvents = this.gridApi.getSelectedRows();

    this.store.dispatch(new EventsActions.SelectEvents(selectedEvents));

    if (selectedEvents && selectedEvents.length === 1) {
      this.store.dispatch(new EventsActions.FocusEvent(selectedEvents[0]));
    } else if (!selectedEvents || !selectedEvents.length) {
      this.store.dispatch(new EventsActions.DefocusEvent());
    }
  }
}
