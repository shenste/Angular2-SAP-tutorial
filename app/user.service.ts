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

    addUser(user) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json())
    }

    // make sure userId has no type, otherwise I got a weird undefined error
    getUser(userId){
        return this._http.get(this._url + "/" + userId)
            .map(res => res.json());
    }
}