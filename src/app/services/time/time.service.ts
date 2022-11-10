import { Injectable } from '@angular/core';
import { HOURS } from 'src/app/common/testing/testing';
import Appointment from 'src/app/common/types/booking/appointment';
import { AllbookingsService } from '../booking/allbookings.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private abs: AllbookingsService) { }

  getTimesForDate(date: Date, booking: Appointment)  {
    const hours = this._getHoursForDay(date.getDay())
    if (hours == undefined) {
      return [];
    } else {
      const bookingsForDate = this.abs.getBookingsForDate(date);
      if (bookingsForDate == undefined) {
        // no need to check for appointments
        // schedule is open for day 30 minute increments
        const duration = this.getBookingDuration(booking);
        console.log(duration)
        return this.getBookableHours(hours, date, 60);
      } else {
        return []
      }

    }
  }

  private _getHoursForDay(dayOfWeek: number) {
    switch (dayOfWeek) {
      case 0:
        return HOURS.SUNDAY
      case 1:
        return HOURS.MONDAY
      case 2:
        return HOURS.TUESDAY
      case 3:
        return HOURS.WEDNESDAY
      case 4:
        return HOURS.THURSDAY
      case 5:
        return HOURS.FRIDAY
      case 6:
        return HOURS.SATURDAY
      default:
        return undefined
    }
  }

  getBookingDuration(booking: Appointment): number {
    var total = booking.service?.duration;
    booking.addons.forEach( addon => {
      total! += addon.duration;
    })
    return total!;
  }

  getBookableHours(hours: string[], date: Date, increments: number) {
    var times = []
    var start = new Date(date.toLocaleDateString() +' '+ hours[0]);
    var end = new Date(date.toLocaleDateString() +' '+ hours[1]);
    while (start.toString() != end.toString()) {
      times.push(Intl.DateTimeFormat(undefined, {timeStyle: 'short'}).format(start));
      start.setMinutes(start.getMinutes() + increments);
    }
    return times
  }

}
