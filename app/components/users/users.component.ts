/// <reference path="../../../typings/tsd.d.ts" />
import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {SaveUserComponent} from '../../components/users/saveuser.component';

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>

        <a class="btn btn-primary" [routerLink]="['\SaveUser', {id: null}]">Add user</a>

        <table class="table table-bordered">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <tr *ngFor="#user of users">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>
                        <a [routerLink]="['SaveUser', { id: user.id }]">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td>DEF</td>
                </tr>
            </tbody>
        </table>
    `,
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