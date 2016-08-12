import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {BasicValidators} from "./validator/basicValidators";
import {CanDeactivate, Router, RouteParams} from "angular2/router";
import {UserService} from "./user.service";
import {User} from "./dto/user";

@Component({
    templateUrl: 'app/template/user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit,CanDeactivate{
    form: ControlGroup;
    title: string;
    user = new User();

    constructor(fb: FormBuilder,
                private _router: Router,
                private _userService: UserService,
                private _routeParams: RouteParams) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([
                BasicValidators.email
            ])],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit(){
        var id = this._routeParams.get('id');
        this.title = id ? 'Edit User' : 'New User';
        if (!id)
            return;

        // load user to edit
        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
    }

    // dirty checking
    routerCanDeactivate(next, previous) {
        if (this.form.dirty) {
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;
    }

    // add/edit user
    save(){
        // console.log('forms value: ' + JSON.stringify(this.form.value));
        var result;
        if (!this.user.id) {
            result = this._userService.addUser(this.user);
        } else {
            result = this._userService.updateUser(this.user);

        }
        result.subscribe(x => {
            console.log('x is: ' + JSON.stringify(x));
            this._router.navigate(['Users']);
        });


    }
}