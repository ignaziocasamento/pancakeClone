import { Component, OnInit } from '@angular/core';
import { NewestCollectionsService } from 'src/app/core/service/newestCollections.service';
import { INftsCards } from 'src/app/models/nftsCards';

@Component({
  selector: 'psclone-newest-collections',
  templateUrl: './newest-collections.component.html',
  styleUrls: ['./newest-collections.component.css']
})
export class NewestCollectionsComponent implements OnInit {

  cards: INftsCards[] = [];

  constructor(private nftsCards: NewestCollectionsService) { }

  ngOnInit(): void {
    this.cards = this.nftsCards.getAll();
  }

}
