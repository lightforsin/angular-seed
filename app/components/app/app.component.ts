import {Component} from 'angular2/core';
import {FavoriteComponent} from '../../components/favorite/favorite.component';
import {VoterComponent} from '../../components/voter/voter.component';
import {TweetsComponent} from '../../components/tweets/tweets.component';
import {SummaryPipe} from '../../pipes/summary.pipe';
import {BootstrapPanel} from '../../components/bs-panel/bs-panel.component';
import {ZippyComponent} from '../../components/zippy/zippy.component';

@Component({
    selector: 'my-app',
    template: `
        <zippy title="Home">
            The home page
        </zippy>
        <zippy title="About us">
            This is what we are:...
        </zippy>

        <div *ngIf="courses.length > 0">
            <div *ngFor="#course of courses, #i = index" 
            style="border: solid 1px red; padding: 10px">
                {{ i + 1 }} - {{ course.title | uppercase}}<br/>
                Rating: {{ course.rating | number:'2.2-2'}} <br />
                Students: {{ course.students | number }} <br />
                Price: {{ course.price | currency:'EUR' }} <br />
                Date: {{ course.startDate | date }} <br />
                Description: {{ course.description | summary:30 }}
            </div>
        </div>
        <div *ngIf="courses.length == 0">You don't have any courses!</div>

        <bs-panel>
            <div class="heading">My heading</div>
            <div class="body">My body</div>
        </bs-panel>

        <h2>Twitter</h2> <br />
        <tweets></tweets>
    `,
    pipes: [SummaryPipe],
    directives: [FavoriteComponent, VoterComponent, 
        TweetsComponent, BootstrapPanel, ZippyComponent]
})

export class AppComponent { 
    viewMode = 'list';
    isCollaped = true;
    title = "The title";

    courses: any[] = [{
            title: 'Info',
            rating: 4.9765,
            students: 1456,
            price: 99.95,
            startDate: new Date(2017, 1, 15),
            description: 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. '
        },
        {
            title: 'Mate',
            rating: 3.7626,
            students: 9723,
            price: 63.75,
            startDate: new Date(2017, 1, 20),
            description: 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. '
        }];
    post = {
        isFavorite: true
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