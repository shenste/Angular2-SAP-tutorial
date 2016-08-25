import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import 'rxjs/add/operator/map';
import {RouterLink} from "@angular/router-deprecated";

@Component({
    selector: 'user',
    templateUrl: 'app/users/users.component.html',
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