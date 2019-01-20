import { Component } from '@angular/core';

import { DataService } from './services/data.service';

import { Data } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Data;

  constructor(
    private dataService: DataService,
  ) { }

  getData() {
    this.dataService.getDataResponse()
    .subscribe(
      response => {
      // display its headers
      console.log('response: ', response);
      this.data = response.body;
      const keys = response.headers.keys();
      // this.headers = keys.map(key =>
      //   `${key}: ${response.headers.get(key)}`);
      // this.config = { ... response.body };
    },
    error => {
      switch (error.status) {
        // case 400:
        // case 401:
        default:
          // console.log('error: ', error);
          break;
      }
    }
    );
  }

}
