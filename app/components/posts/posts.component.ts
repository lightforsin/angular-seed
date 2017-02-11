/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {PostService} from '../../services/post.service';
import {SpinnerComponent} from '../../components/spinner/spinner.component';;
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from '../../models/post';
import {Comment} from '../../models/comment';

@Component({
    selector: 'posts',
    templateUrl: 'app/components/posts/posts.component.html',
    styleUrls: ['app/components/posts/posts.component.css'],
    providers: [PostService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
    posts: Post[];
    comments: Comment[];
    isLoading = true;
    areCommentsLoading = true;
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
        this.areCommentsLoading = true;
        this.selectedPost = post;

        this._postService.getComments(post.id.toString())
            .subscribe(data => {
                this.comments = data
                this.areCommentsLoading = false;
            });
    }
}