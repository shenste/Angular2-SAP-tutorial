import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service";

@Component({
    selector: 'post',
    templateUrl: 'app/template/posts.component.html',
    providers: [PostService]

})

export class PostsComponent implements OnInit{
    
    posts = [];
    
    constructor(private _postService: PostService) {
        
    }
    
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }
}