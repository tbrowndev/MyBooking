import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public step: number = 3

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
  }

  advance(): void {
    this.step++;
  }

  goBack(): void {
    this.step--;
  }

  reset(): void {
    this.bookingService.resetbooking();
    this.router.navigate(['/services']);
  }

}
