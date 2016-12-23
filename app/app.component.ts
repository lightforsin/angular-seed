import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
        <i class="glyphicon glyphicon-star"></i>
        <favorite 
            [isFavorite]="post.isFavorite"
            (change)="onFavoriteChange($event)">
        </favorite>
        <like
            [iLike]="tweet.iLike"
            [totalLikes]="tweet.totalLikes">
        </like>
    `,
    directives: [FavoriteComponent, LikeComponent]
})
export class AppComponent { 
    post = {
        isFavorite: true,
         
    }

    twee = {
        iLike: false,
        totalLikes: 10
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}