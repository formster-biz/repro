import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StorageService } from './storage.service';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'repro'),
    AngularFirestoreModule,
  ],
  providers: [AngularFireStorage, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
