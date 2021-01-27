import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersListComponent } from './components/users-list/users-list.component';


// Services
import { UsersService } from './services/users.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import {LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserFormComponent,
    UsersListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
