import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss'],
})
export class EventsGridComponent implements OnInit {
  rowData: Observable<object>;

  constructor(private http: HttpClient) {}

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
      field: 'component',
      valueFormatter: (params) => {
        return params.value && params.value.name;
      },
    },
    {
      headerName: 'Parent',
      field: 'component',
      valueFormatter: (params) => {
        return params.value && params.value.parentName;
      },
    },
    {
      headerName: 'URL',
      field: 'page',
      valueFormatter: (params) => {
        return params.value && params.value.url;
      },
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
      field: 'user',
      valueFormatter: (params) => {
        return params.value && params.value.email;
      },
    },
  ];

  ngOnInit(): void {
    this.rowData = this.http.get(environment.urls.webAppEvents.base).pipe(
      tap((data) => {
        console.debug(data);
      })
    );
  }
}
