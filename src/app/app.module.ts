import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {Routes, RouterModule} from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContentComponent } from './components/content/content.component';
import { StoryBarComponent } from './components/story-bar/story-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostComponent } from './components/post/post.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environments";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SigninComponent,
    SignupComponent,
    HomePageComponent,
    NavBarComponent,
    ContentComponent,
    StoryBarComponent,
    MainPageComponent,
    PostComponent,
    InfoSectionComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
