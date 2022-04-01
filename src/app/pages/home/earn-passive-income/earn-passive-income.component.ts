import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psclone-earn-passive-income',
  templateUrl: './earn-passive-income.component.html',
  styleUrls: ['./earn-passive-income.component.css']
})
export class EarnPassiveIncomeComponent implements OnInit {
  
  public myInterval = setInterval(this.changeTitle, 3000);
  
  constructor() { }

  ngOnInit(): void {
  }

  private changeTitle() : void {
    const firstEl = document.getElementById("firstTitle");
    const secondEl = document.getElementById("secondTitle");
    const thirdEl = document.getElementById("secondSyrup");
    const fourthEl = document.getElementById("secondFarm");
    firstEl!.style.display = firstEl!.style.display == "flex" ? "none" : "flex";
    secondEl!.style.display = secondEl!.style.display == "none" ? "flex" : "none";
    thirdEl!.style.display = thirdEl!.style.display == "flex" ? "none" : "flex";
    fourthEl!.style.display = fourthEl!.style.display == "none" ? "flex" : "none";
  }

}

 

