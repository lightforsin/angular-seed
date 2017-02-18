import {Component, Input, Output, OnInit, OnChanges, EventEmitter} from 'angular2/core';
import {Post} from '../../models/post';

@Component({
    selector: 'pagination',
    templateUrl: 'app/components/pagination/pagination.component.html',
    styleUrls: ['app/components/pagination/pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges{
    @Input() items: Post[];
    @Input() pagesize: number;
    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    pages: number[] = [];
    currentPage: number = 1;

    private GeneratePages() {
        this.pages = [];
        for(var i=0; i < this.items.length/this.pagesize; i++) {
            this.pages.push(i+1);
        }
    }

    ngOnInit() {
        this.GeneratePages();
    }

    ngOnChanges(changes: any) {
        this.GeneratePages();
        this.currentPage = 1;
    }

    selectPrevious() {
        if(this.currentPage > 1) {
            this.currentPage--;
            this.change.emit(this.currentPage);
        }
    }

    selectNext() {
        if(this.currentPage < this.pages.length) {
            this.currentPage++;
            this.change.emit(this.currentPage);
        }
    }

    selectPage(page) {
        this.currentPage = page;
        this.change.emit(this.currentPage);
    }
}