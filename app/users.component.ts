import {Component, OnInit} from "angular2/core";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
    selector: 'user',
    template: `
        <h1>Users</h1>
        <table class="table table-bordered">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr *ngFor="#user of users">
                <th>{{user.name}}</th>
                <th>{{user.email}}</th>
                <th><i class="glyphicon glyphicon-edit"></i></th>
                <th><i class="glyphicon glyphicon-remove"></i></th>
            </tr>
            
            
        
        </table>
        
    `,
    providers: [UserService]
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