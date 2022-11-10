import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ClientForm from 'src/app/common/types/booking/client';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'client-comp',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  @Output() isValid = new EventEmitter<boolean>;

  public clientForm = new FormGroup({
    firstname: new FormControl('', [Validators.minLength(3), Validators.required]),
    lastname: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'), Validators.required]),
    notes: new FormControl('')
  })

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.clientForm.valueChanges.subscribe(() => {
      this.validateForm();
    })
  }

  validateForm(): void {
    if (this.clientForm.valid) {
      const client: ClientForm = {
        firstname: this.clientForm.controls.firstname.value!,
        lastname: this.clientForm.controls.lastname.value!,
        email: this.clientForm.controls.email.value!,
        phone: this.clientForm.controls.phone.value!,
        notes: this.clientForm.controls.notes.value!,
      };
      this.bookingService.updateClient(client);
    }
    this.isValid.emit(this.clientForm.valid);
  }
}
