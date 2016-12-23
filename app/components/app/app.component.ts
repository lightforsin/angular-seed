import {Component} from 'angular2/core';
import {FavoriteComponent} from '../../components/favorite/favorite.component';
import {VoterComponent} from '../../components/voter/voter.component';
import {TweetsComponent} from '../../components/tweets/tweets.component';

@Component({
    selector: 'my-app',
    template: `
        <i class="glyphicon glyphicon-star"></i>
        <favorite 
            [isFavorite]="post.isFavorite"
            (change)="onFavoriteChange($event)">
        </favorite><br /><br/>
        
        <voter 
            [voteCount]="vote.voteCount"
            [myVote]="vote.myVote"
            (vote)="onVote($event)">
        </voter><br /><br/>

        <h2>Twitter</h2> <br />
        <tweets></tweets>
    `,
    directives: [FavoriteComponent, VoterComponent, TweetsComponent]
})

export class AppComponent { 

    post = {
        isFavorite: true,
         
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