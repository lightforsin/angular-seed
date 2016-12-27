import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
    <div class="zippy">
        <div class="zippy-title" (click)="toggleContent()">
            {{ title }}
            <i class="glyphicon pull-right"
                [ngClass]="
                { 
                    'glyphicon-chevron-down': isCollapsed,
                    'glyphicon-chevron-up': !isCollapsed
                }"></i>
        </div>
        <div class="zippy-content" *ngIf="!isCollapsed">
            <ng-content></ng-content>
        </div>
    </div>
    `,
    styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }`]
})
export class ZippyComponent {
    @Input() title: string = '';
    isCollapsed: boolean = false;

    toggleContent() {
        this.isCollapsed = !this.isCollapsed;
    }
}