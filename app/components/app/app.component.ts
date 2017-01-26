/// <reference path="../../../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {AlbumsComponent} from '../../../app/components/album/albums.component';
import {ContactComponent} from '../../../app/components/contact/contact.component';


@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/components/app/app.component.html',
    directives: [RouterOutlet]
})
export class AppComponent {
}