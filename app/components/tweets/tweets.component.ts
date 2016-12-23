import {Component} from 'angular2/core'
import {TweetService} from '../../services/tweet.service'
import {TweetComponent} from '../../components/tweet/tweet.component'

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})
export class TweetsComponent {
    tweets: any[];
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
} 