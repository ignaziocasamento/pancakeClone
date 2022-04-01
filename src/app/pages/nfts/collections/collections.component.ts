import { Component, OnInit } from '@angular/core';
import { HotCollectionsService } from 'src/app/core/service/hot-collections.service';
import { INftsCards } from 'src/app/models/nftsCards';

// import { Cards } from '../overview/newest-collections/newest-collections.component';


@Component({
  selector: 'psclone-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  card: INftsCards[] = [];

  totalLength: any;
  page: number = 1;

  constructor(private nftsCards: HotCollectionsService) { }

  ngOnInit(): void {
    this.card = this.nftsCards.getAllCards();
  }

}
