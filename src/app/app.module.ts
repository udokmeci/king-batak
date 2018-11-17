import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KartComponent } from './kart/kart.component';
import { DesteComponent } from './deste/deste.component';
import { ElComponent } from './el/el.component';
import { YerComponent } from './yer/yer.component';
import { OyunComponent } from './oyun/oyun.component';
import { IhaleComponent } from './ihale/ihale.component';
import { KozComponent } from './koz/koz.component';

@NgModule({
  declarations: [
    AppComponent,
    KartComponent,
    DesteComponent,
    ElComponent,
    YerComponent,
    OyunComponent,
    IhaleComponent,
    KozComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
