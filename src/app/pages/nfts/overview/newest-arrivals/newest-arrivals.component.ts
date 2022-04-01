import { Component, OnInit } from '@angular/core';
import { NewestArrivalsService } from 'src/app/core/service/newest-arrivals.service';
import { IArrivalCard } from 'src/app/models/arrivalCards';

@Component({
  selector: 'psclone-newest-arrivals',
  templateUrl: './newest-arrivals.component.html',
  styleUrls: ['./newest-arrivals.component.css']
})
export class NewestArrivalsComponent implements OnInit {

  card: IArrivalCard[] = [];

  constructor(private cards: NewestArrivalsService) { }

  ngOnInit(): void {
    this.card = this.cards.getAll();
  }

}
