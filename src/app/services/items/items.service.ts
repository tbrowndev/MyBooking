import { Injectable } from '@angular/core';
import Item from 'src/app/common/types/service/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public serviceItems: Item[] = [];
  public itemtags: string[] = [];

  constructor() { 
    console.log('Constructor ItemService Initiliazed');
    this.setItems();
    this.setTags();
  }

  setItems(): void {
    this.serviceItems = []
    for (let i=0; i<20; i++) {
      this.serviceItems.push({
        title: 'Service: ' + i,
        description: 'Incididunt officia voluptate officia exercitation nisi nulla magna do. Non voluptate aliqua ea minim esse. Do id mollit quis proident aliquip sunt cupidatat.',
        duration: 20,
        price: 30,
        tags: ['Service'+i, 'Item' +i]
      })
    }
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
