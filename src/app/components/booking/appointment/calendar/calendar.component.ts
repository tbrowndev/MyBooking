import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { daysInMonth } from 'src/app/common/helpers/calendar';

@Component({
  selector: 'calendar-comp',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public current: Date = new Date(); // today
  public daysOfMonth: number = daysInMonth(this.current.getMonth(), this.current.getFullYear()); //number of days in the current month
  public firstOfMonthDay: number = this.dayOfWeek(1); //the day of the week the first day falls on

  @Output() dateSelected: EventEmitter<Date> = new EventEmitter<Date>;

  constructor() { }

  ngOnInit(): void {
  }

  isPast(day: number): boolean {
    const today = new Date();
    const date = new Date(this.current.getFullYear(), this.current.getMonth(), day + 1);
    return date < today;
  }

  dayCounter(num: number) {
    return new Array(num);
  }

  dayOfWeek(day: number): number {
    return new Date(this.current.getFullYear(), this.current.getMonth(), day).getDay();
  }

  // checks if month displayed is the current month. prevents from going back in time for booking
  isCurrentMonth(): boolean {
    let curMonthYear = new Date();
    return this.current.getMonth() == curMonthYear.getMonth() && this.current.getFullYear() == curMonthYear.getFullYear();
  }

  //next calendar month
  nextMonth(): void {
    if (this.current.getMonth() == 11) {
      this.current = new Date(this.current.getFullYear() + 1, 0, 1);
    } else {
      this.current = new Date(this.current.getFullYear(), this.current.getMonth() + 1, 1)
    }
    this.daysOfMonth = daysInMonth(this.current.getMonth(), this.current.getFullYear());
    this.firstOfMonthDay = this.dayOfWeek(1);
  }

  //previous calendar month
  prevMonth(): void {
    if (this.current.getMonth() == 0) {
      this.current = new Date(this.current.getFullYear() - 1, 11, 1);
    } else {
      this.current = new Date(this.current.getFullYear(), this.current.getMonth() - 1, 1)
    }
    this.daysOfMonth = daysInMonth(this.current.getMonth(), this.current.getFullYear());
    this.firstOfMonthDay = this.dayOfWeek(1);
  }

  selectDay(day: number): void {
    const date = new Date(this.current.getFullYear(), this.current.getMonth(), day);
    this.dateSelected.emit(date);
  }

}
