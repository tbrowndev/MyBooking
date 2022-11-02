import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Item from 'src/app/common/types/service/item';

@Component({
  selector: 'item-comp',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data: Item = {} as Item;
  @Output() bookButtonClicked: EventEmitter<Item> = new EventEmitter<Item>;

  constructor() { }

  ngOnInit(): void {
  }

  emitBookClick(): void {
    this.bookButtonClicked.emit(this.data);
  }

}
