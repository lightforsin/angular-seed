/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {PostService} from '../../services/post.service';
import {UserService} from '../../services/user.service';
import {SpinnerComponent} from '../../components/spinner/spinner.component';
import {PaginationComponent} from '../../components/pagination/pagination.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from '../../models/post';
import {Comment} from '../../models/comment';
import {User} from '../../models/user';

@Component({
    selector: 'posts',
    templateUrl: 'app/components/posts/posts.component.html',
    styleUrls: ['app/components/posts/posts.component.css'],
    providers: [PostService, UserService, HTTP_PROVIDERS],
    directives: [SpinnerComponent, PaginationComponent]
})
export class PostsComponent implements OnInit {
    posts: Post[];
    pagedPosts: Post[];
    comments: Comment[];
    users: User[];
    arePostsLoading;
    areCommentsLoading;
    selectedPost: Post = null;
    pageSize: 10;
    
    constructor(
        private _postService: PostService,
        private _userService: UserService) {   
    }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }


    private loadUsers() {
        this._userService.getUsers()
            .subscribe(data => this.users = data);
    }

    private loadPosts(filter?) {
        this.arePostsLoading = true;

        this._postService.getPosts(filter)
            .subscribe(
                data => {
                    this.posts = data,
                    this.pagedPosts = this.getPostsInPage(1)
                },
                null,
                () => { this.arePostsLoading = false; });
    }

    onPageChanged(page) {
        this.pagedPosts = this.getPostsInPage(page);
    }

    getPostsInPage(page) {
        let result = [];
        let startIndex = (page - 1) * this.pageSize;
        let endIndex = Math.min(startIndex + this.pageSize, this.posts.length);

        for(var i = startIndex; i < endIndex; i++) {
            result.push(this.posts[i]);
        }

        return result;
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