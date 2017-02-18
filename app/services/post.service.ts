import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/post';
import {Comment} from '../models/comment';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';

@Injectable()
export class PostService {

    private _url = "http://jsonplaceholder.typicode.com/posts"
    constructor(private _http: Http) {
        
    }

    getPosts(filter?): Observable<Post[]> {
        let url = this._url;

        if(filter && filter.userId && filter.userId != 'null')
        {
            url += "?userId=" + filter.userId;
        }
        return this._http.get(url)
            .delay(1000)
            .map(res => res.json());
    }

    getPostsForUserId(userId: string): Observable<Post[]> {
        let url: string = this._url + (userId === "null" ? "" : "?userId=" + userId);

        return this._http.get(url)
            .delay(1000)
            .map(res => res.json());
    }

    getPostsAsPromises(): Promise<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json())
            .toPromise();
    }

    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }

    getComments(postId: string): Observable<Comment[]> {
        let url = this._url + "/" + postId + "/comments";
        return this._http.get(url)
            .delay(1000)
            .map(res => res.json());
    }
}