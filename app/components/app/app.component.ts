/// <reference path="../../../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {NavBarComponent} from '../../../app/components/navbar/navbar.component';
import {HomeComponent} from '../../../app/components/home/home.component';
import {AlbumsComponent} from '../../../app/components/album/albums.component';
import {AlbumComponent} from '../../../app/components/album/album.component';
import {ContactComponent} from '../../../app/components/contact/contact.component';
import {ArchivesComponent} from '../../../app/components/archive/archives.component';
import {ArchiveComponent} from '../../../app/components/archive/archive.component';
import {UsersComponent} from '../../../app/components/users/users.component';
import {AddUserComponent} from '../../../app/components/users/adduser.component';
import {PostsComponent} from '../../../app/components/posts/posts.component';

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/albums', name: 'Albums', component: AlbumsComponent},
    {path: '/albums/:id', name: 'Album', component: AlbumComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/archives', name: 'Archives', component: ArchivesComponent},
    {path: '/archive/:year/:day', name: 'Archive', component: ArchiveComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/users/new', name: 'AddUser', component: AddUserComponent},
    {path: '/users/:id', name: 'EditUser', component: AddUserComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [ArchivesComponent, NavBarComponent, RouterOutlet]
})
export class AppComponent {
}