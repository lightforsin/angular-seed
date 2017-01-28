import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'archives',
    template: `
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archive', { year: archive.year, day: archive.day }]">
                    {{ archive.year + "/" + archive.day }}
                </a>
            </li>
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent {
    archives = [
        {year: "2016", day: "1"},
        {year: "2015", day: "2"},
        {year: "2014", day: "7"}
    ];
}