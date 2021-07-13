import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() author = '';
  @Input() imageURL = '';
  @Input() score = 0;
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
