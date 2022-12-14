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
  @Input() scaleYVisible = false;


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

  isThemeLight;

  constructor(private cdref: ChangeDetectorRef) {
    this.isThemeLight = window.matchMedia('(prefers-color-scheme: light)');
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  generateChart() {
    this.chartData[0].data = this.dataForChart;
    if(this.isThemeLight.matches) {
      this.chartData[0].borderColor = 'red';
    } else {
      this.chartData[0].borderColor = this.lineColor ? this.lineColor : 'red';
    }
    this.chartOptions.scales.y.display = this.scaleYVisible;
  }

  generateLabels() {
   this.chartLabels = this.chartData[0].data.map(value => value.toString());
  }

  ngAfterViewInit() {
   this.generateChart();
   this.generateLabels();
  }

}
