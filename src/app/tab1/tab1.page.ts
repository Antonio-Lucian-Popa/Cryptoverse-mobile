import { UserService } from './../shared/services/user.service';
import { CoinService } from './../shared/services/coin.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

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

  messageForUser = '';
  username = '';

  isDataLoaded = true;

  constructor(
    private coinService: CoinService,
    private userService: UserService,
    private router: Router,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit(): void {
    this.username = this.userService.getUsernameFromLocal();
    if (this.username) {
      this.isDataLoaded = false;
      const currentdate = new Date();
      const currentHour = currentdate.getHours();
      if (currentHour >= 6 && currentHour < 13) {
        this.messageForUser = 'Good Morning';
      } else if (currentHour >= 13 && currentHour < 19) {
        this.messageForUser = 'Good Afternoon';
      } else if (currentHour >= 19 || currentHour < 5) {
        this.messageForUser = 'Good Evening';
      }

      this.coinService.getCryptos(10).subscribe(res => {
        this.cryptos = res.data.coins;
        this.firstFourCrypto = this.cryptos.slice(0, 4);
        this.topTenCrypto = this.cryptos.slice(0, 10);
        this.isDataLoaded = true;
        console.log(this.firstFourCrypto);
      });

      this.userService.usernameChanged.subscribe(username => this.username = username);
    }
  }

}
