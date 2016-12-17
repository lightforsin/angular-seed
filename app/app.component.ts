import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <favorite></favorite>

        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        <img bind-src="imageUrl" />
        <br /><br />
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>
        <div (click)="onDivClick()" style="border:solid 1px green">
            <button (click)="onClick($event)">Submit 1</button>
        </div>
        <br /><br />
        <input type="text" [value]="title" (input)="title = $event.target.value"/>
        <input type="button" (click)="title = ''" value="Reset title"/>

        <br />
        <input type="text" [(ngModel)]="title" />
        <input type="text" bindon-ngModel="title" />
        <courses></courses>`,
    directives: [CoursesComponent, FavoriteComponent]
})
export class AppComponent { 
    title: string = "Angular App";
    imageUrl: string = "http://lorempixel.com/80/40/";
    isActive: boolean = true;

    onClick($event) {
        $event.stopPropagation();
        console.log("Button clicked", $event);
    }

    onDivClick() {
        console.log("Div clicked");
    }
}