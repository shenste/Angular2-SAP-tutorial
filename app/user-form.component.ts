import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validator, Validators} from 'angular2/common';
import {BasicValidators} from "./validator/basicValidators";
import {CanDeactivate} from "angular2/router";

@Component({
    templateUrl: 'app/template/user-form.component.html'
})
export class UserFormComponent implements CanDeactivate{
    form: ControlGroup;

    constructor(fb: FormBuilder) {
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

    routerCanDeactivate(next, previous) {
        if (this.form.dirty) {
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;
    }
}