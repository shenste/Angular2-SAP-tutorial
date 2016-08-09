import {Component, OnInit} from "angular2/core";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {RouterLink} from "angular2/router";

@Component({
    selector: 'user',
    templateUrl: 'app/template/users.component.html',
    providers: [UserService],
    directives: [RouterLink]
})

export class UsersComponent implements OnInit {
    users = [];


    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        this._userService.getUsers()
            .subscribe(res => {
                this.users = res;
            });
    }

}