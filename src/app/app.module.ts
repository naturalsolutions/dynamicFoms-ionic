import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule }          from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DynamicFormComponent }         from './dynamic-form.component';
import { FieldService } from './dynamic-form/protocol.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
   // DynamicFormComponent,
   // DynamicFormFieldComponent 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FieldService
  ]
})
export class AppModule {}