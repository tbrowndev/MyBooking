import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Appointment from 'src/app/common/types/booking/appointment';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public step: number = 2
  public canContinue: boolean = true;

  public appointmentValid: boolean = false;
  public clientValid: boolean = false;
  public nextButtonText: string = 'Next';
  public isBooking: boolean = false;

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
  }

  isValid(): boolean {
    if (this.step == 3){
      return this.appointmentValid;
    }
    if (this.step == 4) {
      return this.clientValid;
    }
    return true;
  }

  async advance() {
    if (this.step == 4) {
      this.step++;
      this.nextButtonText = 'Confirm';
    }
    else if (this.step == 5) {
      this.isBooking = true
      //book appointment
      if (await this.bookingService.bookAppointment()) {
        //successful booking
        this.step++
      }
    }
    else {
      this.step++;
    }
  }

  goBack(): void {
    this.step--;
    this.nextButtonText = 'Next';
  }

  reset(): void {
    this.bookingService.resetbooking();
    this.router.navigate(['/services']);
  }

  getBooking(): Appointment {
    return this.bookingService.getBooking();
  }

}
