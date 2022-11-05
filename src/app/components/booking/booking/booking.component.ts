import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/common/types/service/item';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public step: number = 2

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
  }

  getService(): Item {
    return this.bookingService.getService();
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
