import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <favorite 
            [isFavorite]="post.isFavorite"
            [title]="post.title"
            [alias-title]="post.aliasTitle">
        </favorite>
    `,
    directives: [FavoriteComponent]
})
export class AppComponent { 
    post = {
        title: "My",
        aliasTitle: 'Favorite',
        isFavorite: true 
    }
}