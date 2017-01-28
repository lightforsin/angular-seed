import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/components/contact/contact.component.html'
})
export class ContactComponent implements CanDeactivate{

    constructor(private _router: Router) {
        
    }

    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous) {
        console.log("D: next", next);
        console.log("D: previous", previous);

        return confirm("Are you sure?");
    }
}