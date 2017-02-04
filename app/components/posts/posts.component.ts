/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {PostService} from '../../services/post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from '../../models/post';

@Component({
    selector: 'posts',
    template: `<h1>Posts</h1>
        <div class="col-md-6">
            <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
            <ul class="list-group">
                <li *ngFor="#post of posts" class="list-group-item">
                    {{ post.title}}
                </li>
            </ul>
        </div>
    `,
    styles: [`
        .list-group-item {
            border: 1px solid #2c3e50;
        }

        li:hover {
            font-weight: bold;
            cursor: pointer;
        }
    `],
    providers: [PostService, HTTP_PROVIDERS]
})
export class PostsComponent implements OnInit {
    posts: Post[];
    isLoading = true;
    
    constructor(private _postService: PostService) {   
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(data => {
                this.posts = data
                this.isLoading = false;
            });
        
    }
}