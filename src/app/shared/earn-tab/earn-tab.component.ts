import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'psclone-earn-tab',
  templateUrl: './earn-tab.component.html',
  styleUrls: ['./earn-tab.component.css']
})
export class EarnTabComponent implements OnInit {

  active = 1;
  element1!: string;
  element2!: string;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.alternateBorder();
    this.changeVisual();
  }

  alternateBorder() {
    const element1 = document.getElementById("pills-exc-tab");
    const element2 = document.getElementById("pills-liq-tab");

    element2!.addEventListener('click', function () {
      element2!.classList.add('green-b', 'secondary-v');
      element1!.classList.remove("green-b", 'secondary-v');
    })

    element1!.addEventListener('click', function () {
      element1!.classList.add('green-b', 'secondary-v');
      element2!.classList.remove("green-b", 'secondary-v');
    })
  }

  changeVisual() {
    const element1 = document.getElementById("pills-exc-tab");
    const element2 = document.getElementById("pills-liq-tab");

    if (this.router.url.indexOf('/pools') > -1) {
      this.active = 2;

      element2!.classList.add('green-b');
      element1!.classList.remove('green-b');
    }
  }
}
