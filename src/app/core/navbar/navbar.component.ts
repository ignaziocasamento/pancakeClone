import { Component, OnInit } from '@angular/core';
import { ILanguages } from 'src/app/models/langs';
import { LanguagesService } from 'src/app/core/service/languages.service';

@Component({
  selector: 'psclone-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  langs!: ILanguages[];

  constructor(private langService: LanguagesService) { }

  getLangs() {
    this.langService.getLangs()
      .subscribe(res => {
        this.langs = res;
      })
  }

  ngOnInit(): void {
    this.getLangs();
  }

}
