import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { IUploadCard } from 'src/app/models/uploadCard';

@Component({
  selector: 'psclone-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  prefix: string = '0x...';

  card: IUploadCard[] = [];

  closeResult = '';

  constructor(private modalService: NgbModal, public authenticationService: AuthenticationService) {
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    const records = localStorage.getItem('NftsList');
    if (records !== null) {
      this.card = JSON.parse(records);
    }
  }

  getNewNftId() {
    const oldRecords = localStorage.getItem('NftsList');
    if (oldRecords !== null) {
      const nftsList = JSON.parse(oldRecords);
      return nftsList.length + 1;
    } else {
      return 1
    }
  }

  saveNft(f: NgForm) {
    const oldRecords = localStorage.getItem('NftsList');
    if (oldRecords !== null) {
      const nftsList = JSON.parse(oldRecords);
      this.card.push({
        ...f.value,
      })
      nftsList.push(this.card);
      localStorage.setItem('NftsList', JSON.stringify(nftsList));
    }
    else {
      const nftsArr = [];
      nftsArr.push(this.card);
      localStorage.setItem('NftsList', JSON.stringify(nftsArr));
    }
  }

  // submit(f: NgForm) {
  //   this.card.push({
  //     ...f.value,
  //   })
  //   let record = localStorage.setItem('Nfts', JSON.stringify(this.card));
  //   return record;
  // }
}
