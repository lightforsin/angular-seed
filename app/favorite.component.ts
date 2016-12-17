import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
    <label>{{ title + ' ' + aliasTitle }}</label>
    <i 
        class="glyphicon" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="toggleState()">
    </i>
    `,
    inputs: ['isFavorite']
})
export class FavoriteComponent { 
    isFavorite: boolean = false;
    @Input() title: string;
    @Input('alias-title') aliasTitle: string;

    toggleState() {
        this.isFavorite = !this.isFavorite;
    }
}