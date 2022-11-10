import { Injectable } from '@angular/core';
import { GEN_TEST_ADDONS } from 'src/app/common/testing/testing';
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
    this.addons = GEN_TEST_ADDONS(5);
  }
}
