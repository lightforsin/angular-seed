import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        <img bind-src="imageUrl" />
        <br /><br />
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>
        <courses></courses>`,
    directives: [CoursesComponent]
})
export class AppComponent { 
    title: string = "Angular App";
    imageUrl: string = "http://lorempixel.com/400/200/";
    isActive: boolean = true;
}