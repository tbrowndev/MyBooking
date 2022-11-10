import { Component, Input, OnInit } from '@angular/core';
import Appointment from 'src/app/common/types/booking/appointment';

@Component({
  selector: 'confirm-comp',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() summary: Appointment = {} as Appointment;

  constructor() { }

  ngOnInit(): void {
  }

  totalDuration() {
    var addonTotal = 0;
    this.summary.addons.forEach(addon => {
      addonTotal += addon.duration;
    });
    return this.summary.service?.duration! + addonTotal;
  }

  totalPrice() {
    var addonTotal = 0;
    this.summary.addons.forEach(addon => {
      addonTotal += addon.price;
    });
    return this.summary.service?.price! + addonTotal;
  }

}
