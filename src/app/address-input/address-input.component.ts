import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.addressForm = this.fb.group({
      unitNumber: [''],
      streetNumber: ['', Validators.required],
      streetName: ['', Validators.required],
      streetType: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const addressData = this.addressForm.value;
      this.http.post('https://0a8a4385-c9af-4091-a0ed-60f3d53acf4b.mock.pstmn.io/address', addressData).subscribe(response => {
        console.log(response);
        this.router.navigate(['/address-confirmation'], { state: { addressData } });
      });
    }
  }
}