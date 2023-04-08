import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { AddressConfirmationComponent } from './address-confirmation/address-confirmation.component';
import { RouterModule, Routes,  } from '@angular/router';

const routes: Routes = [
  { path: 'address-input', component: AddressInputComponent },
  { path: 'address-confirmation', component: AddressConfirmationComponent },
  { path: '', redirectTo: '/address-input', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AddressInputComponent,
    AddressConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


