import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class PostService {
    
    _url = 'http://jsonplaceholder.typicode.com/posts/';
    
    constructor(private _http: Http) {
        
    }
    
    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
}