import { Injectable } from '@angular/core';
import { INftsCards } from 'src/app/models/nftsCards';

@Injectable({
  providedIn: 'root'
})
export class HotCollectionsService {
  
  card: INftsCards[] = [
    { img: '../../../../../assets/overview/banner-sm6.png', avatar: '../../../../../assets/overview/avatar6.png', name: 'Pancake Squad', value: 84.43607146 },
    { img: '../../../../../assets/overview/banner-sm7.png', avatar: '../../../../../assets/overview/avatar7.png', name: 'Pancake Bunnies', value: 31.23561319 },
    { img: '../../../../../assets/overview/banner-sm8.png', avatar: '../../../../../assets/overview/avatar8.png', name: 'Gamester Apes', value: 1.68177263 },
    { img: '../../../../../assets/overview/banner-sm9.jpg', avatar: '../../../../../assets/overview/avatar9.png', name: 'ShitPunks', value: 1.50506411 },
    { img: '../../../../../assets/overview/banner-sm10.png', avatar: '../../../../../assets/overview/avatar10.png', name: 'BornBadBoys', value: 1.11593457 },
    { img: '../../../../../assets/overview/banner-sm11.png', avatar: '../../../../../assets/overview/avatar11.png', name: 'BornBadGirl', value: 870.56083 }
  ];

  allCards: INftsCards[] = [
    { img: '../../../../../assets/overview/banner-sm.png', avatar: '../../../../../assets/overview/avatar.png', name: 'Liquid Monster', value: 52.79429 },
    { img: '../../../../../assets/overview/banner-sm1.png', avatar: '../../../../../assets/overview/avatar1.png', name: 'WolfiLeague', value: 16.4189 },
    { img: '../../../../../assets/overview/banner-sm2.png', avatar: '../../../../../assets/overview/avatar2.png', name: 'Lil Bulls', value: 82.28029 },
    { img: '../../../../../assets/overview/banner-sm3.png', avatar: '../../../../../assets/overview/avatar3.png', name: 'Kittens Meow Meow', value: 55.98296 },
    { img: '../../../../../assets/overview/banner-sm4.png', avatar: '../../../../../assets/overview/avatar4.png', name: 'Cross Boses', value: 23.95 },
    { img: '../../../../../assets/overview/banner-sm.png', avatar: '../../../../../assets/overview/avatar.png', name: 'Liquid Monster', value: 52.79429 },
    { img: '../../../../../assets/overview/banner-sm1.png', avatar: '../../../../../assets/overview/avatar1.png', name: 'WolfiLeague', value: 16.4189 },
    { img: '../../../../../assets/overview/banner-sm2.png', avatar: '../../../../../assets/overview/avatar2.png', name: 'Lil Bulls', value: 82.28029 },
    { img: '../../../../../assets/overview/banner-sm3.png', avatar: '../../../../../assets/overview/avatar3.png', name: 'Kittens Meow Meow', value: 55.98296 },
    { img: '../../../../../assets/overview/banner-sm4.png', avatar: '../../../../../assets/overview/avatar4.png', name: 'Cross Boses', value: 23.95 },
    { img: '../../../../../assets/overview/banner-sm5.png', avatar: '../../../../../assets/overview/avatar5.png', name: 'Saint Monster', value: 61.9298 },
    { img: '../../../../../assets/overview/banner-sm.png', avatar: '../../../../../assets/overview/avatar.png', name: 'Liquid Monster', value: 52.79429 },
    { img: '../../../../../assets/overview/banner-sm1.png', avatar: '../../../../../assets/overview/avatar1.png', name: 'WolfiLeague', value: 16.4189 },
    { img: '../../../../../assets/overview/banner-sm2.png', avatar: '../../../../../assets/overview/avatar2.png', name: 'Lil Bulls', value: 82.28029 },
    { img: '../../../../../assets/overview/banner-sm3.png', avatar: '../../../../../assets/overview/avatar3.png', name: 'Kittens Meow Meow', value: 55.98296 },
    { img: '../../../../../assets/overview/banner-sm4.png', avatar: '../../../../../assets/overview/avatar4.png', name: 'Cross Boses', value: 23.95 },
    { img: '../../../../../assets/overview/banner-sm.png', avatar: '../../../../../assets/overview/avatar.png', name: 'Liquid Monster', value: 52.79429 },
    { img: '../../../../../assets/overview/banner-sm1.png', avatar: '../../../../../assets/overview/avatar1.png', name: 'WolfiLeague', value: 16.4189 },
    { img: '../../../../../assets/overview/banner-sm2.png', avatar: '../../../../../assets/overview/avatar2.png', name: 'Lil Bulls', value: 82.28029 },
    { img: '../../../../../assets/overview/banner-sm3.png', avatar: '../../../../../assets/overview/avatar3.png', name: 'Kittens Meow Meow', value: 55.98296 },
    { img: '../../../../../assets/overview/banner-sm4.png', avatar: '../../../../../assets/overview/avatar4.png', name: 'Cross Boses', value: 23.95 },
    { img: '../../../../../assets/overview/banner-sm5.png', avatar: '../../../../../assets/overview/avatar5.png', name: 'Saint Monster', value: 61.9298 },
    { img: '../../../../../assets/overview/banner-sm1.png', avatar: '../../../../../assets/overview/avatar1.png', name: 'WolfiLeague', value: 16.4189 },
    { img: '../../../../../assets/overview/banner-sm2.png', avatar: '../../../../../assets/overview/avatar2.png', name: 'Lil Bulls', value: 82.28029 },
    { img: '../../../../../assets/overview/banner-sm3.png', avatar: '../../../../../assets/overview/avatar3.png', name: 'Kittens Meow Meow', value: 55.98296 }
  ];

  constructor() { }

  getAll(): INftsCards[] {
    return this.card;
  }

  getAllCards(): INftsCards[] {
    return this.allCards;
  }
}
