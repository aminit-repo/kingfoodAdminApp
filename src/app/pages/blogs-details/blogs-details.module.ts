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

import { BlogsDetailsRoutingModule } from './blogs-details-routing.module';
import { BlogsDetailsComponent } from './blogs-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [BlogsDetailsComponent],
  imports: [
    CommonModule,
    BlogsDetailsRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class BlogsDetailsModule { }
