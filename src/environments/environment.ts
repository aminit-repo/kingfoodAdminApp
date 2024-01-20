/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //baseURL: 'http://api.myfoodkings.com/index.php/',
  //mediaURL: 'http://api.myfoodkings.com/uploads/',
  baseURL: '',
  mediaURL: '',
  onesignal: {
    appId: '488a471e-df29-4802-be4f-fc2803f7d350',
    googleProjectNumber: '370596125768',
    restKey: 'YzdhOWY5YWItY2U0ZS00MDE5LTg3ZWQtYWI5MjY5MzMzMjc4'
  },
  general: {
    symbol: '₦',
    code: 'NGN'
  },
  authToken: '123456789',
  default_country_code: '234'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
