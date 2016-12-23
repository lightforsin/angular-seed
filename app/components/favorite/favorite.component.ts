import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/components/favorite/favorite.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})
export class FavoriteComponent { 
    @Input() isFavorite: boolean;
    @Output() change = new EventEmitter();

    toggleState() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite});
    }
}