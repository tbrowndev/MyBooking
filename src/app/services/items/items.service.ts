import { Injectable } from '@angular/core';
import Item from 'src/app/common/types/service/item';
import { GEN_TEST_SERVICES } from '../../common/testing/testing'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public serviceItems: Item[] = [];
  public itemtags: string[] = [];

  constructor() {
    this.setItems();
    this.setTags();
  }

  setItems(): void {
    this.serviceItems = GEN_TEST_SERVICES(12);
  }

  setTags(): void {
    for (let item of this.serviceItems) {
      for (let tag of item.tags) {
        if (!this.itemtags.includes(tag)) {
          this.itemtags.push(tag);
        }
      }
    }
  }
}
