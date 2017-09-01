import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/root/app.component';
import {AlbumService} from './services/AlbumService';
import {PhotoService} from './services/PhotoService';
import {UserService} from './services/UserService';
import {UserDetailComponent} from './components/userDetail/user.detail.component';
import {UsersComponent} from './components/users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  providers: [AlbumService, PhotoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
