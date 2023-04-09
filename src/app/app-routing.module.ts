import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressInputComponent } from './address-input/address-input.component';
import { AddressConfirmationComponent } from './address-confirmation/address-confirmation.component';

const routes: Routes = [
  { path: '', component: AddressInputComponent },
  { path: 'address-confirmation', component: AddressConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }