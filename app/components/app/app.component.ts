/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder} from 'angular2/common';
import {PostService} from '../../services/post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {OnDestroy} from 'angular2/core';
import {Post} from '../../models/post';

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit { 
    isLoading = true;

    constructor(private _postService: PostService) {
        var newPost: Post = {
            userId: 10,
            title: "Mr.",
            body: "some info here"
        };
        this._postService.createPost(newPost);
    }
    
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => {
                console.log(posts);
            });
        
        this._postService.getPostsAsPromises()
            .then(posts => {
                this.isLoading = false;
                console.log(posts);
            });
    }
}