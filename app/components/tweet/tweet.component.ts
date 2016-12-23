import {Component, Input} from 'angular2/core';
import {LikeComponent} from '../../components/like/like.component';

@Component({
    selector: 'tweet',
    templateUrl: 'app/components/tweet/tweet.template.html',
    styleUrls: ['app/components/tweet/tweet.style.css'],
    directives: [LikeComponent]
})
export class TweetComponent {
    constructor(){
        console.log(this.data);
    }
    @Input() data;
}