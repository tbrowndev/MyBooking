import { Injectable } from '@angular/core';
import Appointment from 'src/app/common/types/booking/appointment';

@Injectable({
  providedIn: 'root'
})
export class AllbookingsService {

  private _BookingMap = new Map();

  constructor() { }

  addBooking(booking: Appointment) {
    try {
      if (this._BookingMap.has(booking.date)) {
        const date = this._BookingMap.get(booking.date);
        date.push(booking)
      } else {
        this._BookingMap.set(booking.date, [booking]);
      }
      return true;
    } catch {
      return false;
    }
  }

  getBookingsForDate(date: Date) {
    return this._BookingMap.get(date.toLocaleDateString());
  }
}
