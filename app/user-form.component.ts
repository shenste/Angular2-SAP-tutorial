import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validator, Validators} from 'angular2/common';
import {BasicValidators} from "./validator/basicValidators";

@Component({
    templateUrl: 'app/template/user-form.component.html'
})
export class UserFormComponent {
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
}