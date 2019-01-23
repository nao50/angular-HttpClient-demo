import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

import { DataService } from './services/data.service';
import { Data, ChartData } from './models/data.model';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  jsonData: Data;
  chartData: ChartData[];

  context01: CanvasRenderingContext2D;
  context02: CanvasRenderingContext2D;

  @ViewChild('mycanvas01') mycanvas01: ElementRef;
  @ViewChild('mycanvas02') mycanvas02: ElementRef;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getChartData();
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
