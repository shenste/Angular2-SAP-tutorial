import {Component, Input, Output, EventEmitter, OnChanges} from "angular2/core";

@Component({
    selector: 'pagination',
    templateUrl: 'app/template/pagination.component.html',
    directives: [],
    providers: []
})

export class PaginationComponent implements OnChanges{
    @Input() items = [];
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter();
    pages: any[];
    currentPage;

    constructor() {

    }
    
    ngOnChanges() {
        // reset page to 1
        this.currentPage = 1;

        // calc total pages
        var pagesCount = Math.floor( this.items.length / this.pageSize );
        var remainder = this.items.length % this.pageSize;
        pagesCount += remainder > 0 ? 1 : 0;
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++) {
            this.pages.push(i);
        }
    }
    
    nextPage() {
        if (this.currentPage == this.pages.length) {
            return;
        }
        this.currentPage += 1;
        this.pageChanged.emit({ newPageNumber: this.currentPage});
    }
    
    previousPage() {
        if (this.currentPage == 1) {
            return;
        }
        this.currentPage -= 1;
        this.pageChanged.emit({ newPageNumber: this.currentPage});
    }

    jumpToPage(page) {
        this.currentPage = page;
        this.pageChanged.emit({ newPageNumber: this.currentPage});
    }

}