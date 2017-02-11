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
                <li *ngFor="#post of posts" class="list-group-item">
                    {{ post.title}}
                </li>
            </ul>
        </div>
    `,
    styleUrls: ['app/components/posts/posts.styles.css'],
    providers: [PostService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]
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