/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder} from 'angular2/common';
import {PostService} from '../../services/post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    template: `
        <button id="myButton" (click)="getData()">Click here</button>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent { 
    constructor(private _postService: PostService) {
        
    }
    
    getData() {
        this._postService.getPosts()
            .subscribe(posts => console.log(posts));
    }
    
}