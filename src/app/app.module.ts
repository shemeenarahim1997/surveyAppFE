import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PageheaderComponent } from './layout/pageheader/pageheader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { InviteComponent } from './pages/invite/invite.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    LayoutComponent,
    PageheaderComponent,
    SidebarComponent,
    PagesComponent,
    CreateSurveyComponent,
    InviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
