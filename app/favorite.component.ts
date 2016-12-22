import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
    <i 
        class="glyphicon" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="toggleState()">
    </i>
    `
})
export class FavoriteComponent { 
    @Input() isFavorite: boolean;
    @Output() change = new EventEmitter();

    toggleState() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite});
    }
}