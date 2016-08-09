import {Component} from 'angular2/core';
import {NavBarComponent} from "./navbar-component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";
import {HomeComponent} from "./home.component";
import {UserFormComponent} from "./user-form.component";


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Other', redirectTo:['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
       
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }