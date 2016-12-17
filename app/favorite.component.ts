import {Component} from 'angular2/core';


@Component({
    selector: 'favorite',
    template: `
            <i class="glyphicon" 
            [class.glyphicon-star]="isActive"
            [class.glyphicon-star-empty]="!isActive"
            (click)="toggleIsActive()"></i>
        `
})
export class FavoriteComponent { 
    isActive: boolean = false;

    toggleIsActive() {
        this.isActive = !this.isActive;
    }
}