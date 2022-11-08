import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { CoinService } from '../shared/services/coin.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  isCryptoDetailOpened = false;

  cryptos: any[] = [];
  currentCrypto: any;

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.getCryptos(100).subscribe(res => {
      this.cryptos = res.data.coins;
    });
  }

  openDialog(currentCrypto: any) {
    this.isCryptoDetailOpened = true;
    this.currentCrypto = currentCrypto;
  }

  cancel() {
    this.isCryptoDetailOpened = false;
  }

  confirm() {
    this.isCryptoDetailOpened = false;
  }

}
