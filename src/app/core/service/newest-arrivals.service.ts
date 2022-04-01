import { Injectable } from '@angular/core';
import { IArrivalCard } from 'src/app/models/arrivalCards';

@Injectable({
  providedIn: 'root'
})
export class NewestArrivalsService {

  cards: IArrivalCard[] = [
    {img: '../../../../../assets/overview/backg.png', description: 'Lil Bulls', name: 'Lil Bulls #3016', price: 1847.39},
    {img: '../../../../../assets/overview/backg2.png', description: 'Pancake Squad', name: 'Pancake Squad #710', price: 369.48},
    {img: '../../../../../assets/overview/backg3.png', description: 'Gamester Apes', name: 'Gamester #3463', price: 7031},
    {img: '../../../../../assets/overview/backg4.png', description: 'BornBadGirls', name: 'Girl #3009', price: 110.84},
    {img: '../../../../../assets/overview/backg5.png', description: 'ShitPunks', name: 'Shit Punk 9889', price: 121.93},
    {img: '../../../../../assets/overview/backg6.png', description: 'Saint Monster', name: 'Observation_165', price: 144.64},
    {img: '../../../../../assets/overview/backg7.png', description: 'Lil Bulls', name: 'Lil Bulls #1636', price: 81.28},
    {img: '../../../../../assets/overview/backg8.png', description: 'Pancake Squad', name: 'Pancake Squad #462', price: 1588.40},
    {img: '../../../../../assets/overview/backg9.png', description: 'Lil Bulls', name: 'Lil Bulls #3346', price: 277.05},
    {img: '../../../../../assets/overview/backg10.png', description: 'Lil Bulls', name: 'Lil Bulls #1945', price: 147.76},
    {img: '../../../../../assets/overview/backg11.png', description: 'ShitPunks', name: 'Shit Punk 2333', price: 55.41},
    {img: '../../../../../assets/overview/backg12.png', description: 'BornBadBoys', name: 'BornBadBoys #3977', price: 73.85},
    {img: '../../../../../assets/overview/backg13.png', description: 'BornBadBoys', name: 'BornBadBoys #4387', price: 73.86},
    {img: '../../../../../assets/overview/backg14.png', description: 'The Bull Society', name: '#5160', price: 111.19},
    {img: '../../../../../assets/overview/backg15.png', description: 'Pancake Bunnies', name: 'Stormy Easter', price: 18.91},
    {img: '../../../../../assets/overview/backg16.png', description: 'Pancake Bunnies', name: 'Sleepy', price: 6.60}
  ]

  constructor() { }

  getAll(): IArrivalCard[] {
    return this.cards;
  }
}
