import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'spinner',
    template: `
        <i *ngIf="isVisible" class="fa fa-spinner fa-spin"></i>
    `
})
export class SpinnerComponent {
    @Input() isVisible;
}