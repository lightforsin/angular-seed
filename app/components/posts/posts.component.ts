/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {PostService} from '../../services/post.service';
import {SpinnerComponent} from '../../components/spinner/spinner.component';;
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from '../../models/post';

@Component({
    selector: 'posts',
    template: `<h1>Posts</h1>
        <div class="col-md-6">
            <spinner [isVisible]="isLoading"></spinner>
            <ul class="list-group">
                <li *ngFor="#post of posts" class="list-group-item" (click)="selectPost(post)">
                    {{ post.title}}
                </li>
            </ul>
        </div>
        <div class="col-md-6" *ngIf="selectedPost != null">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ selectedPost.title }}</h3>
                </div>
                <div class="panel-body">
                    {{ selectedPost.body }}
                </div>
            </div>
        </div>
    `,
    styleUrls: ['app/components/posts/posts.styles.css'],
    providers: [PostService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
    posts: Post[];
    isLoading = true;
    selectedPost: Post = null;
    
    constructor(private _postService: PostService) {   
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(data => {
                this.posts = data
                this.isLoading = false;
            });
        
    }

    selectPost(post: Post) {
        this.selectedPost = post;
    }
}