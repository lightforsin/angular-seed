/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ControlGroup,FormBuilder} from 'angular2/common';

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

        var values = search.valueChanges;

        //var transforms = values.filter(text => text.length > 3);
            //.map(str =>(<string>str).replace('','-­‐'))

        values.subscribe(x => console.log(x));

        // var element = $("#search");

        // var keyups = Observable.fromEvent(element, "keyup")
        //     .map(e => e.target.value)
        //     .filter(text => text.length >=3)
        //     .debounceTime(400)
        //     .distinctUntilChanged()
        //     .flatMap(searchTerm => {
        //         var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
        //         var promise = $.getJSON(url);
        //         return Observable.fromPromise(promise);
        //     });

        // keyups.subscribe(data => console.log(data));
    }
}