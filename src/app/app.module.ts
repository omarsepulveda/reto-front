import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { OfferComponent } from './offer/offer.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { PricesComponent } from './prices/prices.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
