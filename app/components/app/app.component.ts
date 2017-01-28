/// <reference path="../../../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {AlbumsComponent} from '../../../app/components/album/albums.component';
import {AlbumComponent} from '../../../app/components/album/album.component';
import {ContactComponent} from '../../../app/components/contact/contact.component';
import {ArchivesComponent} from '../../../app/components/archive/archives.component';
import {ArchiveComponent} from '../../../app/components/archive/archive.component';


@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/albums/:id', name: 'Album', component: AlbumComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/archives', name: 'Archives', component: ArchivesComponent},
    {path: '/archive/:year/:day', name: 'Archive', component: ArchiveComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/components/app/app.component.html',
    directives: [RouterOutlet, RouterLink, ArchivesComponent]
})
export class AppComponent {
}