import { Component, OnInit, Input } from '@angular/core';


export interface ICard {
  currentText: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() count: number = 2;

  cardown: string = 'down';
  cardup: string = 'up'
  cards: ICard[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.count; i++) {
      this.cards.push({currentText: this.cardown})
    }
  }

  toggleCard(clickedIndex: number){
    
    this.cards[clickedIndex].currentText = this.cardup;
    this.cards.forEach((item,index) => {
      if(clickedIndex != index){
        item.currentText = this.cardown
       }
    });
  }
}
