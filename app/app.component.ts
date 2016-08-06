import {Component} from 'angular2/core';
import {NavBarComponent} from "./navbar-component";

@Component({
    selector: 'my-app',
    template: `
        <nav-bar></nav-bar>
    `,
    directives: [NavBarComponent]
})
export class AppComponent { }