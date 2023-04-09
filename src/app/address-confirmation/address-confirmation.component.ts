import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-confirmation',
  templateUrl: './address-confirmation.component.html',
  styleUrls: ['./address-confirmation.component.css']
})
export class AddressConfirmationComponent implements OnInit {
  providedAddress: any;
  homeAddressChoices: any[]=[];
  addressForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      selectedAddress: ['', Validators.required]
    });

    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.providedAddress = navigation.extras.state['data'];
    }
  }

  ngOnInit(): void {
    this.http.get('https://0a8a4385-c9af-4091-a0ed-60f3d53acf4b.mock.pstmn.io/addresses').subscribe((response: any) => {
      this.homeAddressChoices = response.homeAddressChoices;
      this.homeAddressChoices.unshift({
        ...this.providedAddress,
        type: 'Provided address'
      });
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      const selectedAddress = this.addressForm.value.selectedAddress;
      this.http
        .post(
          'https://0a8a4385-c9af-4091-a0ed-60f3d53acf4b.mock.pstmn.io/address',
          selectedAddress
        )
        .subscribe((response) => {
          console.log(response);
        });
      console.log(selectedAddress);
    } else {
      alert('Please select an address');
    }
  }
}