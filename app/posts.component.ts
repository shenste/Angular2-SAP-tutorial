import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";
import {UserService} from "./user.service";
import {PaginationComponent} from "./pagination.component";

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
    directives: [SpinnerComponent, PaginationComponent],
    providers: [PostService, UserService]

})

export class PostsComponent implements OnInit{
    pageSize = 10;
    posts = [];
    postsLoading = true;
    currentPost; // originally is currently
    commentLoading;
    users = [];
    postsOnThisPage = [];
    
    constructor(private _postService: PostService, private _userService: UserService) {
        
    }
    
    ngOnInit() {
        // load users
        this._userService.getUsers()
            .subscribe(users => this.users = users);

        // load posts
        this._postService.getPosts()
            .subscribe(posts => {
                    this.posts = posts;
                    this.getPostsInPage(1);
                },
                e => console.error(e),
                () => {
                    this.postsLoading = false;
                }
            );
    }

    onPostSelected(selectedPost) {
        this.currentPost = selectedPost;
        this.commentLoading = true;
        this._postService.getComments(selectedPost.id)
            .subscribe(
                comments => this.currentPost.comments = comments,
                e => console.error(e),
                () => {
                    this.commentLoading =false;
                });
    }

    filterPosts(userId) {
        this.currentPost = null;
        this.postsLoading = true;

        var postSubscribable;
        if (!userId){
            postSubscribable = this._postService.getPosts();

        } else {
            postSubscribable = this._postService.getPostsByUserId(userId)
        }

        postSubscribable
            .subscribe(
                posts => {
                    this.posts = posts;
                    this.getPostsInPage(1);
                },
                e => console.error(e),
                () => {
                    this.postsLoading = false;
                }
            )
    }

    onPageChange($event) {
        this.getPostsInPage($event.newPageNumber);
    }

    private getPostsInPage(page) {
        this.postsOnThisPage = [];
        for (var i=this.pageSize*(page-1); i<this.pageSize*(page); i++) {
            this.postsOnThisPage.push( this.posts[i] );
        }
    }
    
}