import { Component, OnInit } from '@angular/core';
import Item from 'src/app/common/types/service/item';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items: Item[] = []
  public tags: string[] = [];
  public filterTags: string[] = []

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.serviceItems;
    this.tags = this.itemsService.itemtags;
  }

  handleBookClick(data: Item): void {
    console.log(data);
  }

  toggleFilter(tag: string): void {
    if (this.filterTags.includes(tag)) {
      this.filterTags = this.filterTags.filter(t => t != tag);
    } else {
      this.filterTags.push(tag);
    }
  }

  hideItem(tags: string[]): boolean {
    const merged = [...new Set([...this.filterTags, ...tags])];
    if (tags.length >= this.filterTags.length) {
      return !(tags.length == merged.length)
    } else {
      return true
    }
  }

}
