import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {HeroComponent} from './hero/hero.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // { path: 'github', component: RepoBrowserComponent,
  //   children: [
  //     { path: '', component: RepoListComponent },
  //     { path: ':org', component: RepoListComponent,
  //       children: [
  //         { path: '', component: RepoDetailComponent },
  //         { path: ':repo', component: RepoDetailComponent }
  //       ]
  //     }]
  // },
  {
    path: 'contact',
    component: ContactComponent
  }
];
