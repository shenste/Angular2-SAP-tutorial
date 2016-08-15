import {Component, OnInit, Output, EventEmitter} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";

@Component({
    selector: 'post',
    templateUrl: 'app/template/posts.component.html',
    styles: [`
        .posts li { 
            cursor: pointer; 
        }
         
        .posts li:hover { 
            background: #ecf0f1; 
         }
         
        .list-group-item.active,   
        .list-group-item.active:hover,   
        .list-group-item.active:focus {  
            background-color: #ecf0f1;  
            border-color: #ecf0f1;   
            color: #2c3e50; 
        }
    `],
    directives: [SpinnerComponent],
    providers: [PostService]

})

export class PostsComponent implements OnInit{
    posts = [];
    isLoading = true;
    @Output() change = new EventEmitter();
    currentPost = null;
    
    constructor(private _postService: PostService) {
        
    }
    
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts,
                e => console.error(e),
                () =>{
                    this.isLoading = false;
                }
            );
    }

    onPostSelected(selectedPost) {
        //this.currentPost = { title: selectedPost.title, body: selectedPost.body}
        this.currentPost = selectedPost;
    }
    
}