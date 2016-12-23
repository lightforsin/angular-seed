import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

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
        <voter 
            [voteCount]="vote.voteCount"
            [myVote]="vote.myVote"
            (vote)="onVote($event)">
        </voter>
    `,
    directives: [FavoriteComponent, LikeComponent, VoterComponent]
})
export class AppComponent { 
    post = {
        isFavorite: true,
         
    }

    tweet = {
        iLike: false,
        totalLikes: 10
    }

    vote = {
        voteCount: 10,
        myVote: 0
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    onVote($event) {
        console.log($event);
    }
}