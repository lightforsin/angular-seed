import {Component} from 'angular2/core';
import {TweetsComponent} from '../../components/tweets/tweets.component';

@Component({
    selector: 'my-app',
    template: `
        <h2>Twitter</h2> <br />
        <tweets></tweets>
    `,
    directives: [TweetsComponent]
})

export class AppComponent { 
}