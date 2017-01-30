import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private _url = "http://jsonplaceholder.typicode.com/users"
    constructor(private _http: Http) {
        
    }

    getUsers(): Observable<User[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getUsersAsPromises(): Promise<User[]> {
        return this._http.get(this._url)
            .map(res => res.json())
            .toPromise();
    }

    createUser(user: User) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }
}