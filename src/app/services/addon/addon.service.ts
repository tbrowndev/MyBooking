import { Injectable } from '@angular/core';
import AddOn from 'src/app/common/types/service/addon';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  public addons: AddOn[] = [];

  constructor() { 
    this.getAddons();
  }

  getAddons(): void {
    for (let i=0; i<5; i++) {
      this.addons.push({
        title: 'Addon' + i,
        description: 'Culpa et pariatur anim ea ipsum ad aliqua sint eiusmod',
        duration: 10,
        price: 5,
      })
    }
  }
}
