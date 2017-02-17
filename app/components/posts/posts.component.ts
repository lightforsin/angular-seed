/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {PostService} from '../../services/post.service';
import {UserService} from '../../services/user.service';
import {SpinnerComponent} from '../../components/spinner/spinner.component';;
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from '../../models/post';
import {Comment} from '../../models/comment';
import {User} from '../../models/user';

@Component({
    selector: 'posts',
    templateUrl: 'app/components/posts/posts.component.html',
    styleUrls: ['app/components/posts/posts.component.css'],
    providers: [PostService, UserService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
    posts: Post[];
    comments: Comment[];
    users: User[];
    arePostsLoading;
    areCommentsLoading;
    selectedPost: Post = null;
    
    constructor(
        private _postService: PostService,
        private _userService: UserService) {   
    }

    ngOnInit() {
        this._userService.getUsers()
            .subscribe(data => this.users = data);
        
        this.loadPosts();
    }

    loadPosts(filter?) {
        this.arePostsLoading = true;

        this._postService.getPosts(filter)
            .subscribe(
                data => this.posts = data,
                null,
                () => { this.arePostsLoading = false; });
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

    getPostsForUser(filter) {
        this.selectedPost = null;
        this.loadPosts(filter);
    }
}