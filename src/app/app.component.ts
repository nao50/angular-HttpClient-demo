import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

import { DataService } from './services/data.service';
import { Data, ChartData } from './models/data.model';

import { Chart } from 'chart.js';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  jsonData: Data;
  chartData: ChartData[];
  map: any;

  context01: CanvasRenderingContext2D;
  context02: CanvasRenderingContext2D;
  context03: CanvasRenderingContext2D;
  context04: CanvasRenderingContext2D;

  @ViewChild('mycanvas01') mycanvas01: ElementRef;
  @ViewChild('mycanvas02') mycanvas02: ElementRef;
  @ViewChild('mycanvas03') mycanvas03: ElementRef;
  @ViewChild('mycanvas04') mycanvas04: ElementRef;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getChartData();

    this.map = L.map('map').setView([34.702485, 135.495951], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([34.702485, 135.495951]).bindPopup('<b>Hello world!</b><br>I am a popup.').addTo(this.map);

    L.circle([34.702486, 135.495952], { color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 500}).addTo(this.map);

    L.polyline([
      [34.702495, 135.495961],
      [34.712525, 135.505991],
      [34.712545, 135.504991],
  ], {
      'color': '#FF0000',
      'weight': 5,
      'opacity': 0.6
  }).addTo(this.map);
  }

  ngAfterViewInit() {
    // this.context01 = this.mycanvas01.nativeElement.getContext('2d');
    // let mycanvas01 = new Chart(this.context01, {
    //   type: 'line',
    //   data: {
    //     datasets: [{
    //       label: 'Data01',
    //       backgroundColor: 'rgba(255, 255, 153, 0.5)',
    //       borderColor: 'rgba(255, 99, 132, 0)',
    //       pointRadius: 0,
    //       fill: true,
    //       data: this.chartData,
    //       // data: [
    //       //   { x: 0, y: 2 },
    //       //   { x: 1, y: 1 },
    //       //   { x: 2, y: 2.5 },
    //       //   { x: 3, y: 5 },
    //       //   { x: 4, y: 3 },
    //       //   { x: 5, y: 4 },
    //       //   { x: 6, y: 9 },
    //       //   { x: 7, y: 7 },
    //       //   { x: 8, y: 12 },
    //       // ],
    //     }, {
    //       label: 'Data02',
    //       backgroundColor: 'rgba(153, 255, 255, 0.5)',
    //       borderColor: 'rgba(255, 99, 132, 0)',
    //       pointRadius: 0,
    //       fill: true,
    //       data: [
    //         { x: 0, y: 1 },
    //         { x: 1, y: 4 },
    //         { x: 2, y: 8 },
    //         { x: 3, y: 12 },
    //         { x: 4, y: 1 },
    //         { x: 5, y: 5 },
    //         { x: 6, y: 2 },
    //         { x: 7, y: 3 },
    //         { x: 8, y: 1 },
    //       ],
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     tooltips: {
    //       mode: 'index',
    //       intersect: false,
    //     },
    //     title: {
    //       display: true,
    //       text: 'Angular & Chart.js'
    //     },
    //     scales: {
    //       xAxes: [{
    //         type: 'linear',
    //         position: 'bottom',
    //         scaleLabel: {
    //           labelString: 'X',
    //           display: true,
    //         }
    //       }],
    //       yAxes: [{
    //         type: 'linear',
    //         scaleLabel: {
    //           labelString: 'Y',
    //           display: true
    //         }
    //       }]
    //     }
    //   }
    // });



    this.context02 = this.mycanvas02.nativeElement.getContext('2d');
    let mycanvas02= new Chart(this.context02, {
      type: 'bar',
      data: {
      datasets: [{
        label: 'Bar Data',
        backgroundColor: 'rgba(255, 255, 153, 0.5)',
        borderColor: 'rgba(255, 99, 132, 0)',
        data: [4, 20, 30, 40]
      }, {
        label: 'Line Data',
        backgroundColor: 'rgba(153, 255, 255, 0)',
        borderColor: 'rgba(153, 255, 255, 1)',
        data: [45, 37, 39, 24],
        type: 'line',
        pointRadius: 0,
        fill: false,
      }],
      labels: ['January', 'February', 'March', 'April']
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Angular & Chart.js'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        yAxes: [{
          type: 'linear',
          scaleLabel: {
            labelString: 'Y',
            display: true
          }
        }]
      }
    },
    });

    this.context04 = this.mycanvas04.nativeElement.getContext('2d');
    let mycanvas04= new Chart(this.context04, {
      type: 'line',
      data: {
        // label: 'sample1 (dist: linear)',
        datasets: [{
        label: 'sample1',
        data: [{
          t: new Date("2018/04/16 22:18"),
          y: 100
        }, {
          t: new Date("2018/04/16 23:18"),
          y : 105
        }, {
          t: new Date("2018/04/17 00:18"),
          y : 56
        }, {
          t: new Date("2018/04/17 01:18"),
          y: 132,
        }, {
          t: new Date("2018/04/17 05:18"),
          y: 154,
        }, {
          t: new Date("2018/04/17 06:58"),
          y: 123
        }],
        lineTension: 0,
        backgroundColor: 'rgba(60, 160, 220, 0.3)',
        borderColor: 'rgba(60, 160, 220, 0.8)'
      }]
    },
      options: {
        title: {
        display: true,
        text: 'Angular & Chart.js'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear',
            ticks: {
              source: 'auto'
            },
          }],
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
        }
      }
    });

  }

  chart(chartData) {
    this.context01 = this.mycanvas01.nativeElement.getContext('2d');
    let mycanvas01 = new Chart(this.context01, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Data01',
          backgroundColor: 'rgba(255, 255, 153, 0.5)',
          borderColor: 'rgba(255, 99, 132, 0)',
          pointRadius: 0,
          fill: true,
          data: chartData,
        }, {
          label: 'Data02',
          backgroundColor: 'rgba(153, 255, 255, 0.5)',
          borderColor: 'rgba(255, 99, 132, 0)',
          pointRadius: 0,
          fill: true,
          data: [
            { x: 0, y: 1 },
            { x: 1, y: 4 },
            { x: 2, y: 8 },
            { x: 3, y: 12 },
            { x: 4, y: 1 },
            { x: 5, y: 5 },
            { x: 6, y: 2 },
            { x: 7, y: 3 },
            { x: 8, y: 1 },
          ],
        }]
      },
      options: {
        responsive: true,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        title: {
          display: true,
          text: 'Angular & Chart.js'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              labelString: 'X',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            scaleLabel: {
              labelString: 'Y',
              display: true
            }
          }]
        }
      }
    });
  }



  timeChart(chartData) {
    this.context03 = this.mycanvas03.nativeElement.getContext('2d');
    let mycanvas03 = new Chart(this.context03, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Data01',
          backgroundColor: 'rgba(255, 255, 153, 0.5)',
          borderColor: 'rgba(255, 99, 132, 0)',
          pointRadius: 0,
          fill: true,
          data: chartData,
        }, {
          label: 'Data02',
          backgroundColor: 'rgba(153, 255, 255, 0.5)',
          borderColor: 'rgba(255, 99, 132, 0)',
          pointRadius: 0,
          fill: true,
          data: [
            { x: 0, y: 1 },
            { x: 1, y: 4 },
            { x: 2, y: 8 },
            { x: 3, y: 12 },
            { x: 4, y: 1 },
            { x: 5, y: 5 },
            { x: 6, y: 2 },
            { x: 7, y: 3 },
            { x: 8, y: 1 },
          ],
        }]
      },
      options: {
        responsive: true,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        title: {
          display: true,
          text: 'Angular & Chart.js'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              labelString: 'X',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            scaleLabel: {
              labelString: 'Y',
              display: true
            }
          }]
        }
      }
    });
  }


  getData() {
    this.dataService.getDataResponse()
    .subscribe(
      response => {
      console.log('response: ', response);
      this.jsonData = response.body;
    },
    error => {
      switch (error.status) {
        default:
          console.log('error: ', error);
          break;
      }
    });
  }

  getChartData() {
    this.dataService.getChartDataResponse()
    .subscribe(
      response => {
        this.chartData = response.body;
        console.log('this.chartData: ', this.chartData);
        this.chart(this.chartData);
        this.timeChart(this.chartData);
      },
      error => {
        switch (error.status) {
        default:
          console.log('error: ', error);
          break;
        }
      }
    );
  }

}
