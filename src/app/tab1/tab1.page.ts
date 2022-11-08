import { CoinService } from './../shared/services/coin.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  lineChart: any;

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1.6
  };

  cryptos: any[] = [];
  // This is for our home chart card
  firstFourCrypto: any[] = [];
  topTenCrypto: any[] = [];

  constructor(private coinService: CoinService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
   this.coinService.getCryptos(10).subscribe(res => {
    this.cryptos = res.data.coins;
    this.firstFourCrypto = this.cryptos.slice(0, 4);
    this.topTenCrypto = this.cryptos.slice(0, 10);
    console.log(this.firstFourCrypto);
  });
  }

  ngAfterViewInit(): void {
  }

  lineChartMethod(sparkline: any[]): any {
    // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    //   coinPrice.push(coinHistory?.data?.history[i].price);
    // }
    return {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: 'something',
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'transparent',
            borderColor: '#ffff',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ffff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            spanGaps: false,
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false //This will do the task
          }
        },
        scales: {
          y: {
            ticks: {
              display: false
            },
            beginAtZero: true,
          },
        }
      }
    };
  }

}
