/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { trigger, state, style, AUTO_STYLE, transition, animate } from "@angular/animations";

export const cardToggle = trigger('cardToggle', [
    state('collapsed, void',
        style({
            overflow: 'hidden',
            height: '0px',
        })
    ),
    state('expanded',
        style({
            height: AUTO_STYLE,
        })
    ),
    transition('collapsed <=> expanded', [
        animate('400ms ease-in-out')
    ])
]);

export const cardClose = trigger("cardClose", [
    state("open", style({
        opacity: 1
    })),
    state("closed", style({
        opacity: 0,
        display: 'none'
    })),
    transition("open <=> closed", animate("400ms")),
])