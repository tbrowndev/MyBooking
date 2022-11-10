import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../../components/booking/booking/booking.component';
import { AddonComponent } from '../../components/booking/addon/addon/addon.component';
import { AddonItemComponent } from '../../components/booking/addon/addon-item/addon-item.component';
import { AppointmentComponent } from 'src/app/components/booking/appointment/appointment.component';
import { CalendarComponent } from 'src/app/components/booking/appointment/calendar/calendar.component';
import { TimeComponent } from 'src/app/components/booking/appointment/time/time.component';
import { ClientComponent } from 'src/app/components/booking/client/client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from 'src/app/components/booking/confirmation/confirmation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    BookingComponent,
    AddonComponent,
    AddonItemComponent,
    AppointmentComponent,
    CalendarComponent,
    TimeComponent,
    ClientComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class BookingModule { }
