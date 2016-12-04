import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {rootRouterConfig} from './app.routes';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {HeroComponent} from './hero/hero.component';
import {HeroFormComponent} from './hero/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    HeroFormComponent,
    AboutComponent,
    ContactComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
