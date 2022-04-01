import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psclone-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {

  showModal: boolean = false;

  list: {title: string, description: string}[] = [
    {'title': 'BNB', 'description': 'BNB'},
    {'title': 'ALPACA', 'description': 'Alpaca'},
    {'title': 'BELT', 'description': 'Belt'},
    {'title': 'BTCB', 'description': 'BTCB Token'},
    {'title': 'BUNNY', 'description': 'Pancake Bunny'},
    {'title': 'BUSD', 'description': 'BUSD Token'},
    {'title': 'CAKE', 'description': 'PancakeSwap Token'},
    {'title': 'EPS', 'description': 'Ellipsis'},
    {'title': 'ETH', 'description': 'Ethereum Token'},
    {'title': 'NRV', 'description': 'Nerve Finance'},
    {'title': 'TKO', 'description': 'TokoCrypto'},
    {'title': 'USDT', 'description': 'Tether USD'},
    {'title': 'VAI', 'description': 'VAI Stablecoin'},
    {'title': 'WBNB', 'description': 'WBNB Token'},
    {'title': 'XVS', 'description': 'XVS Venus'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showHidden() {
    this.showModal = !this.showModal;
  }

  hide() {
    if (this.showModal = true) {
      this.showModal = false;
    }
  }

}