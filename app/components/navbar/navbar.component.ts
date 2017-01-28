import {Component} from 'angular2/core';
import {RouterOutlet, RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: '/app/components/navbar/navbar.component.html',
    directives: [RouterLink, RouterOutlet]
})
export class NavBarComponent {
    constructor(public router: Router) {
    }

    isCurrentRoute(routeName: string): boolean {
        return this.router.isRouteActive(this.router.generate([routeName]));
    }
}