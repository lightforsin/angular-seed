import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Archive</h1>
        <div>
            {{ archive.year + " " + archive.day}}
        </div>
    `
})
export class ArchiveComponent implements OnInit {
    archive;

    constructor(
        private _routeParams: RouteParams){
    }
    
    ngOnInit(){
        let year = this._routeParams.get("year");
        let day = this._routeParams.get("day"); 

        this.archive = {
            year: year,
            day: day
        }
    }
}