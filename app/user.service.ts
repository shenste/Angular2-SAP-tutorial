import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/add/operator/map';
import {User} from "./dto/user";

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
    
    updateUser(user) {
        return this._http.put(this._url + "/" + user.id, JSON.stringify(user))
            .map(res => res.json());
    }
}