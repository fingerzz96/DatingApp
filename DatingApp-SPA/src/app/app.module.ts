import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AuthService} from './_services/auth.service';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import {AlertifyService} from './_services/alertify.service';
import {BsDatepickerModule, BsDropdownModule, ButtonsModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import {MemberListComponent} from './members/member-list/member-list.component';
import {ListsComponent} from './lists/lists.component';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {AuthGuard} from './_guards/auth.guard';
import {MemberCardComponent} from './members/member-card/member-card.component';
import {MemberDetailComponent} from './members/member-detail/member-detail.component';
import {MemberDetailResolver} from './_resolver/member-detail.resolver';
import {MemberListResolver} from './_resolver/member-list.resolver';
import {NgxGalleryModule} from 'ngx-gallery';
import {MemberEditComponent} from './members/member-edit/member-edit.component';
import {MemberEditResolver} from './_resolver/member-edit.resolver';
import {PreventUnsavedChanges} from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import {FileUploadModule} from 'ng2-file-upload';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimeAgoPipe} from 'time-ago-pipe';
import {ListResolver} from './_resolver/list.resolver';
import {MessagesResolver} from './_resolver/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: {enable: false},
    rotate: {enable: false}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TimeAgoPipe,
    MemberMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    NgxGalleryModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    FileUploadModule,
    ButtonsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    PreventUnsavedChanges,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    ListResolver,
    MessagesResolver,
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
