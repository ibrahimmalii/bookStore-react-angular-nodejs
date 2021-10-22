import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
// import { Ng5SliderModule } from 'ng5-slider';
//  import { Observable } from 'rxjs';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


//start of import social login modules
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider , FacebookLoginProvider} from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '110770812923-nsh217rehcgov5d6v1a80h82kmk6s4cu.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '261003865513295'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
=======
    AppRoutingModule,FontAwesomeModule,   NgxSliderModule
>>>>>>> 03932946b7a528d04352fa88e4ade17395bda755
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
