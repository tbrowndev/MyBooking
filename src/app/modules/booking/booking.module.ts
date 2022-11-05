import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../../components/booking/booking/booking.component';
import { AddonComponent } from '../../components/booking/addon/addon/addon.component';
import { AddonItemComponent } from '../../components/booking/addon/addon-item/addon-item.component';



@NgModule({
  declarations: [
    BookingComponent,
    AddonComponent,
    AddonItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
