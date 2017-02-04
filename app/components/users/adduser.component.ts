import {Component, OnInit} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {EmailValidators} from './emailValidator';
import {Router, CanDeactivate} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'add-user',
    templateUrl: '/app/components/users/adduser.component.html',
    styles: [`
        .alert-danger {
            background-color: lightgray;
            border: none;
        }

        .panel {
            border-radius: 10px;
            padding: 20px;
            background-color: #f2f2f2;
        }        
    `],
    providers: [HTTP_PROVIDERS, UserService]
})
export class AddUserComponent implements CanDeactivate, OnInit {
    form: ControlGroup; 
    title: string;
    user: User = new User();

    constructor(fb: FormBuilder, 
        private _router: Router, 
        private _userService: UserService,
        private _routeParams: RouteParams) {
        
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidators.shouldHaveCorrectFormat])],
            phone: ['', Validators.required],
            street: [''],
            suite: [''],
            city: [''],
            zipcode: ['']
        })
    }

    // submit(form) {
    //     this._userService.createUser({
    //         name: form.controls.name.value,
    //         email: form.controls.email.value
    //     });
    //     this._router.navigate(['Users']);
    // }

    submit() {
        this._userService.createUser(this.form.value)
            .subscribe(x => {
                this._router.navigate(['Users']);
            });
    }

    routerCanDeactivate(next, previous) {
        console.log("D: next", next);
        console.log("D: previous", previous);

        if(this.form.dirty === true){
            return confirm("You have unsaved modifications!\n Are you sure you want to leave the page ?");
        }

        return true;
    }

    ngOnInit() {
        let userId = this._routeParams.get("id");
        if(userId === null) {
            this.title = "Add user";
        }
        else {
            this.title = "Edit user";

            this._userService.getUsers()
                .map(users => {
                    return users.filter(user => user.id == userId);
                })
                .subscribe(users => {
                    if(users.length > 0)
                        this.user = users[0];
                });
        }
    }
}