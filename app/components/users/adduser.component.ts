import {Component} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'add-user',
    templateUrl: '/app/components/users/adduser.component.html',
    styles: [`
        .alert-danger {
            background-color: lightgray;
            border: none;
        }
    `]
})
export class AddUserComponent {
    form: ControlGroup; 

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            street: ['', Validators.required],
            suite: ['', Validators.required],
            city: ['', Validators.required],
            zipcode: ['', Validators.required]
        })
    }
}