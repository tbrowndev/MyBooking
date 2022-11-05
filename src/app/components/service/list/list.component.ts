import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/common/types/service/item';
import { BookingService } from 'src/app/services/booking/booking.service';
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

  constructor(private itemsService: ItemsService, private router: Router, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.items = this.itemsService.serviceItems;
    this.tags = this.itemsService.itemtags;
  }

  handleBookClick(service: Item): void {
    this.bookingService.setService(service);
    this.router.navigate(['/booknow']);
  }

  toggleFilter(tag: string): void {
    if (this.filterTags.includes(tag)) {
      this.filterTags = this.filterTags.filter(t => t != tag);
    } else {
      this.filterTags.push(tag);
    }
  }

  hideItem(tags: string[]): boolean {
    /* Merge tags from item with filter tags removing duplicates*/
    const merged = [...new Set([...this.filterTags, ...tags])];
    if (tags.length >= this.filterTags.length) {
      return !(tags.length == merged.length)
    } else {
      return true
    }
  }

}
