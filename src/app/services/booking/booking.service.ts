import { Injectable } from '@angular/core';
import Appointment from 'src/app/common/types/booking/appointment';
import AddOn from 'src/app/common/types/service/addon';
import Item from 'src/app/common/types/service/item';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private booking: Appointment = {
    client: undefined,
    service: undefined,
    addons: [],
    date: '',
    time: '',
  };

  constructor() {
    this.booking.service =  {
      title: 'Service 20',
      description: 'Ea sunt ad et id ut mollit magna. Ut Lorem eiusmod velit est deserunt amet enim sint voluptate ipsum.',
      duration: 45,
      price: 35,
      tags: []
    }
   }

  setService(service: Item): void {
    this.booking.service = service;
    console.log(this.booking);
  }

  getService(): Item {
    return this.booking.service!;
  }

  resetbooking(): void {
    this.booking = {
      client: undefined,
      service: undefined,
      addons: [],
      date: '',
      time: '',
    };
    console.log(this.booking);
  }

  insertAddon(addon: AddOn): void {
    this.booking.addons.push(addon);
    console.log(this.booking);
  }

  removeAddon(addon: AddOn): void {
    this.booking.addons = this.booking.addons.filter(a => a.title != addon.title);
    console.log(this.booking);
  }

}
