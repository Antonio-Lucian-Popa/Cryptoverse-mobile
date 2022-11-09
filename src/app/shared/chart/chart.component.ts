/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Chart, ChartConfiguration, ChartDataset, ChartOptions, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit, AfterContentChecked {

  @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;
  @Input() dataForChart: any[] = [];
  @Input() configForChart: any;
  @Input() lineColor?: string;


  public chartData: ChartDataset[] = [
    {
      fill: false,
      pointRadius: 0,
      data: [],
      backgroundColor: [],
      borderColor: ''
    }
  ];

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false
      },
      x: {
        display: false
      }
    }
  };

  public chartLabels: string[] = [];
  public chartType: ChartType  = 'line';

  constructor(private cdref: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  generateChart() {
    this.chartData[0].data = this.dataForChart;
    this.chartData[0].borderColor = this.lineColor ? this.lineColor : 'red';
    console.log(this.chartData[0].data);
  }

  generateLabels() {
   this.chartLabels = this.chartData[0].data.map(value => value.toString());
  }

  ngAfterViewInit() {
   this.generateChart();
   this.generateLabels();
  }

}
