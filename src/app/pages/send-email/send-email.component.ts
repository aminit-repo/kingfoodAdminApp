/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import { ApisService } from 'src/app/services/apis.service';
import * as moment from 'moment';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  subject: any = '';
  message: any = '';
  ckeditorContent: any = '';
  constructor(
    public api: ApisService,
    private toastyService: ToastyService,
    private spinner: NgxSpinnerService,
    private navCtrl: Location
  ) {
    this.api.auth();
  }

  ngOnInit(): void {
  }

  submit() {
    console.log('send');
    if (!this.subject || !this.message) {
      this.error(this.api.translate('All Fields are required'));
      return false;
    }
    const param = {
      subject: this.subject,
      message: this.message
    };
    console.log(param);
    console.log('send mail');
    this.spinner.show();
    this.api.post('users/adminEmails', param).then((data) => {
      console.log(data);
      this.spinner.hide();
      this.success('mail sent');
      this.subject = '';
      this.message = '';
    }, error => {
      console.log(error);
      this.spinner.hide();
      this.error(this.api.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.spinner.hide();
      this.error(this.api.translate('Something went wrong'));
    });
  }

  error(message) {
    const toastOptions: ToastOptions = {
      title: this.api.translate('Error'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: () => {
        console.log('Toast  has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.error(toastOptions);
  }

  success(message) {
    const toastOptions: ToastOptions = {
      title: this.api.translate('Success'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: () => {
        console.log('Toast  has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.success(toastOptions);
  }


  onChange(event) {
  }

  onEditorChange(event) {
  }
}
