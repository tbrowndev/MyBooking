import { Injectable } from '@angular/core';
import Appointment from 'src/app/common/types/booking/appointment';
import Item from 'src/app/common/types/service/item';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private booking: Appointment = {} as Appointment;

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
  }

  getService(): Item {
    return this.booking.service!;
  }

  resetbooking(): void {
    this.booking = {} as Appointment;
  }

}
