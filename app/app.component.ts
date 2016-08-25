import {Component} from '@angular/core';
import {NavBarComponent} from "./shared/navbar-component";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notfound.component";
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {UserFormComponent} from "./users/user-form.component";


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/users/:id', name: 'EditUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
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