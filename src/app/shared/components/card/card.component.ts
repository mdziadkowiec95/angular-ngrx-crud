import { Component, OnInit, Input } from '@angular/core';

export interface CardData {
  id: number;
  title: string;
  imgSrc: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: CardData;
  @Input() imgClass = '';
  @Input() imgAlt = '';
  @Input() redirectTo = '';

  constructor() { }

  ngOnInit() {}
}
