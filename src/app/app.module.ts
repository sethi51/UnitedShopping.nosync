import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header';
import { SideMenuComponent } from './common/header/side-menu/side-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SubHeaderComponent } from './common/header/sub-header/sub-header.component';
import { LoginComponent } from './common/login/login.component';
import { NewUserComponent } from './common/new-user/new-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    HomePageComponent,
    SubHeaderComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    DynamicDialogModule,
    PasswordModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
