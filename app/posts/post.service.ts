import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PostService {
    
    _url = 'http://jsonplaceholder.typicode.com/posts/';
    
    constructor(private _http: Http) {
        
    }
    
    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getComments(pid) {
        return this._http.get(this._url + pid + '/comments')
            .map(res => res.json());
    }
    
    getPostsByUserId(userId) {
        return this._http.get(this._url + '?userId=' + userId)
            .map(res => res.json());
    }
}