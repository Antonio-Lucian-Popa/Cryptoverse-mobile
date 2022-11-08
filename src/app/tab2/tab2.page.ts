import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  userForm = this.fb.group({
    searchWord: ['']
  });

  filteredCrypto: any[] = [];

  constructor(private coinService: CoinService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.coinService.getCryptos(100).subscribe(res => {
      this.cryptos = res.data.coins;
      this.filteredCrypto = res.data.coins;
    });
    this.userForm.get('searchWord').valueChanges.subscribe(word => {
      this.searchCrypto(word);
    });
  }

  searchCrypto(wordToSearch: string): void {
    this.filteredCrypto = this.cryptos.filter(crypto => crypto.name.toLocaleLowerCase().includes(wordToSearch.toLocaleLowerCase())
    || crypto.symbol.toLocaleLowerCase().includes(wordToSearch.toLocaleLowerCase())
    );
    console.log(this.filteredCrypto);
    if(!wordToSearch) {
      this.filteredCrypto = this.cryptos;
    }
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
