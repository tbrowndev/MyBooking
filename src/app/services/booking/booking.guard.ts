import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanActivate {

  constructor(private router: Router, private bookingService: BookingService) {}
  canActivate(): boolean {
    if (this.bookingService.getService() == undefined) {
      this.router.navigate(['/services']);
      return false
    }
    return true;
  }
  
}
