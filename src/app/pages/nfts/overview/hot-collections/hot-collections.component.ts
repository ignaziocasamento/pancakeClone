import { Component, OnInit } from '@angular/core';
import { HotCollectionsService } from 'src/app/core/service/hot-collections.service';
import { INftsCards } from 'src/app/models/nftsCards';

// import { Cards } from '../newest-collections/newest-collections.component';


@Component({
  selector: 'psclone-hot-collections',
  templateUrl: './hot-collections.component.html',
  styleUrls: ['./hot-collections.component.css']
})
export class HotCollectionsComponent implements OnInit {
  
  cards: INftsCards[] = [];;

  constructor(private hotCollections: HotCollectionsService) { }

  ngOnInit(): void {
    this.cards = this.hotCollections.getAll();
  }

}
