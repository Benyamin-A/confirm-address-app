import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { AddressConfirmationComponent } from './address-confirmation/address-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressInputComponent,
    AddressConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }