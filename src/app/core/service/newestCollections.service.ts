import { Injectable } from '@angular/core';
import { INftsCards } from 'src/app/models/nftsCards';

@Injectable({
  providedIn: 'root'
})
export class NewestCollectionsService {

  card: INftsCards[] = [
    { img: '../../../../../assets/overview/banner-sm.png', avatar: '../../../../../assets/overview/avatar.png', name: 'Liquid Monster', value: 52.79429 },
    { img: '../../../../../assets/overview/banner-sm1.png', avatar: '../../../../../assets/overview/avatar1.png', name: 'WolfiLeague', value: 16.4189 },
    { img: '../../../../../assets/overview/banner-sm2.png', avatar: '../../../../../assets/overview/avatar2.png', name: 'Lil Bulls', value: 82.28029 },
    { img: '../../../../../assets/overview/banner-sm3.png', avatar: '../../../../../assets/overview/avatar3.png', name: 'Kittens Meow Meow', value: 55.98296 },
    { img: '../../../../../assets/overview/banner-sm4.png', avatar: '../../../../../assets/overview/avatar4.png', name: 'Cross Boses', value: 23.95 },
    { img: '../../../../../assets/overview/banner-sm5.png', avatar: '../../../../../assets/overview/avatar5.png', name: 'Saint Monster', value: 61.9298 }
  ]

  constructor() { }

  getAll(): INftsCards[] {
    return this.card;
  }

}
