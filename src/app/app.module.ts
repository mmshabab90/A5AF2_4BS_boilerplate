import { AuthService } from './services/security/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlarmsComponent } from './pages/alarms/alarms.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MapComponent } from './pages/map/map.component';
import { ChatInputComponent } from './pages/chat/chat-input/chat-input.component';
import { ChatMessageComponent } from './pages/chat/chat-message/chat-message.component';
import { ChatTitleBarComponent } from './pages/chat/chat-title-bar/chat-title-bar.component';
import { ChatroomWindowComponent } from './pages/chat/chatroom-window/chatroom-window.component';
import { AlarmListComponent } from './pages/alarms/alarm-list/alarm-list.component';

import { AgmCoreModule } from '@agm/core';
import { ChatListComponent } from './pages/chat/chat-list/chat-list.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import {AlarmListService} from './services/alarm-list.service';
import {AngularFireDatabase} from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlarmsComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    MapComponent,
    ChatInputComponent,
    ChatMessageComponent,
    ChatTitleBarComponent,
    ChatroomWindowComponent,
    AlarmListComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVZyc0CgomdFKtOSkpq2bOyXHoWpqBTaw'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlarmListService,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
