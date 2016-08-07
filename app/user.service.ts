import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _url = 'http://jsonplaceholder.typicode.com/users';
    constructor(private _http: Http) {

    }

    getUsers() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getFollowers(userName: string) {
        let searchUrl = this._url + userName + '/followers';
        console.log(searchUrl);
        return this._http.get(searchUrl)
            .map(res => res.json());
    }
}