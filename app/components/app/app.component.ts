/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {GitHubProfileComponent} from '../../components/github-profile/github-profile.component';

@Component({
    selector: 'my-app',
    template: `
        <github-profile></github-profile>
    `,
    directives: [GitHubProfileComponent]
})
export class AppComponent {
}