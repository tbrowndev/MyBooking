import { Injectable } from '@angular/core';
import Appointment from 'src/app/common/types/booking/appointment';
import ClientForm from 'src/app/common/types/booking/client';
import AddOn from 'src/app/common/types/service/addon';
import Item from 'src/app/common/types/service/item';
import { AllbookingsService } from './allbookings.service';

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

  constructor(private abs: AllbookingsService) {
   }

  setService(service: Item): void {
    this.booking.service = service;
  }

  getService(): Item {
    return this.booking.service!;
  }

  getBooking(): Appointment {
    return this.booking;
  }

  resetbooking(): void {
    this.booking = {
      client: undefined,
      service: undefined,
      addons: [],
      date: '',
      time: '',
    };
  }

  insertAddon(addon: AddOn): void {
    this.booking.addons.push(addon);
  }

  removeAddon(addon: AddOn): void {
    this.booking.addons = this.booking.addons.filter(a => a.title != addon.title);
  }

  updateAppointment(date: string, time: string): void {
    this.booking.date = date;
    this.booking.time = time;
  }

  updateClient(client: ClientForm): void {
    this.booking.client = client;
  }

  private sleep(ms: number) {
    return new Promise( (resolve) => setTimeout(resolve, ms));
  }

  async bookAppointment(): Promise<boolean> {
    await this.sleep(3000);
    const status = this.abs.addBooking(this.booking);
    return status;
  }

}
