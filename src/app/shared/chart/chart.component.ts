/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {


  @Input() dataForChart: any;
  @Input() configForChart: any;

  lineChart: any;

  lineChartData = {
    //labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    labels: ['', '', '', '', '', '', '', ''],
    datasets: [
      {
        data: [89, 34, 55, 54, 21, 19, 44, 20],
        label: 'sd',
        fill: true
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  // generateChart() {
  //   this.lineChart = new Chart(`${this.idChart}`,  this.datasChart );
  // }

   ngAfterViewInit() {
  //   this.generateChart();
   }

}
