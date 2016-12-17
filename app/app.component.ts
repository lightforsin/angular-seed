import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <favorite></favorite>
    `,
    directives: [FavoriteComponent]
})
export class AppComponent { 
}