import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { BookingComponent } from './components/booking/booking/booking.component';
import { ListComponent } from './components/service/list/list.component';
import { AuthGuard } from './services/auth/auth.guard';
import { BookingGuard } from './services/booking/booking.guard';

const routes: Routes = [
  {path: '', redirectTo: 'services', pathMatch: 'full'},
  {path: 'services', title: 'Services', component: ListComponent},
  {path: 'booknow', title: 'Book Now', component: BookingComponent, canActivate: [BookingGuard]},
  {path: 'login', title: 'Login', component: LoginComponent},
  {path: 'bookings', title: 'Bookings', component: ListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
