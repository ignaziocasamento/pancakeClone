import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { IUploadCard } from 'src/app/models/uploadCard';

@Component({
  selector: 'psclone-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {
  

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
  }

}
