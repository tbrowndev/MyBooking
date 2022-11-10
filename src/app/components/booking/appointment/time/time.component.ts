import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';
import { TimeService } from 'src/app/services/time/time.service';

@Component({
  selector: 'time-comp',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() dateForTimes: Date = new Date();
  @Output() timeSelected = new EventEmitter<string>;

  public times: string[] = [];

  public selectedTime: string = '';

  constructor(private timeService: TimeService, private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.timesForDate(this.dateForTimes);
  }

  timesForDate(date: Date): void {
    this.times = this.timeService.getTimesForDate(date, this.bookingService.getBooking());
  }

  selectTime(time: string): void {
    this.selectedTime = time;
    this.timeSelected.emit(time);
  }

}
