import {Component} from 'angular2/core';

@Component({
    templateUrl: '/app/components/contact/contact.component.html'
})
export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}