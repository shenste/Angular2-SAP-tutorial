import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {BasicValidators} from "./validator/basicValidators";
import {CanDeactivate, Router} from "angular2/router";
import {UserService} from "./user.service";

@Component({
    templateUrl: 'app/template/user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements CanDeactivate{
    form: ControlGroup;

    constructor(fb: FormBuilder, private _router: Router, private _userService: UserService) {
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

    // dirty checking
    routerCanDeactivate(next, previous) {
        if (this.form.dirty) {
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;
    }

    // add user
    save(){
        console.log('forms value: ' + JSON.stringify(this.form.value));
        this._userService.addUser(this.form.value)
            .subscribe(x => {
                // Ideally, here we'd want:
                //form.markAsPristine();
                console.log('x is: ' + JSON.stringify(x));
                this._router.navigate(['Users']);
            })

    }
}