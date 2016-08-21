import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: 'navbar',
    templateUrl: 'app/template/navbar.component.html',
    styles: [`
    
    `],
    directives: [ROUTER_DIRECTIVES],
    providers: []
    

})

export class NavBarComponent {

    constructor(private _router: Router) {

    }

    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}
