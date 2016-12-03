import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// import {rootRouterConfig} from './app.routes';

// import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
