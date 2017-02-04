/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {SaveUserComponent} from '../../components/users/saveuser.component';

@Component({
    selector: 'users',
    templateUrl: '/app/components/users/users.component.html',
    styles: [`
        th {
            color: red;
            padding: 10px 5px 10px 5px;
        }

        table {
            margin-top: 10px;
        }
    `],
    providers: [HTTP_PROVIDERS, UserService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
    users: User[];

    constructor(private _userService: UserService) {
        
    }

    ngOnInit(){
        // this._userService.getUsersAsPromises()
        //     .then(data => {
        //         this.users = data;
        // });
        this._userService.getUsers()
            .subscribe(data => {
                this.users = data;
        });
    }
}