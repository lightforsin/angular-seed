/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder} from 'angular2/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/fromArray';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
})
export class AppComponent { 
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search:[]
        });

        var search = this.form.find('search');

        var changes = search.valueChanges
            .debounceTime(400)
            .map(str =>(<string>str).replace('','-­‐'));

        changes.subscribe(x => console.log(x));

        // var startDates = [];
        // var startDate = new Date();

        // for(var day=-2; day <= 2; day++){
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate() + day
        //     );

        //     startDates.push(date);
        // }

        // Observable
        //     .fromArray(startDates)
        //     .map(date => {
        //         console.log("Getting deals for date " + date);
        //         return [1, 2, 3];
        //     })
        //     .subscribe(x => console.log(x));
    }
}