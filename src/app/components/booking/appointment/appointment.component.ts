import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'appointment-comp',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Output() isValid = new EventEmitter<boolean>;

  public selectedDate: Date = new Date();

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  updateTimes(date: Date): void {
    this.selectedDate = date;
  }

  timeSelected(time: string): void {
    this.bookingService.updateAppointment(this.selectedDate.toDateString(), time);
    this.isValid.emit(true);
  }

}
