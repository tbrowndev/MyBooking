import { Component, OnInit } from '@angular/core';
import AddOn from 'src/app/common/types/service/addon';
import { AddonService } from 'src/app/services/addon/addon.service';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'addon-comp',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  public addons: AddOn[] = [];

  constructor(private addonService: AddonService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.addons = this.addonService.addons;
  }

  handleAddOnToggle(isChecked: boolean, addon: AddOn): void {
    if (isChecked) {
      this.bookingService.insertAddon(addon);
    } else {
      this.bookingService.removeAddon(addon);
    }
  }

}
