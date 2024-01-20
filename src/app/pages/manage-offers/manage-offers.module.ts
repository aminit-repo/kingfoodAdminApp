/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageOffersRoutingModule } from './manage-offers-routing.module';
import { ManageOffersComponent } from './manage-offers.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [ManageOffersComponent],
  imports: [
    CommonModule,
    ManageOffersRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule
  ]
})
export class ManageOffersModule { }
