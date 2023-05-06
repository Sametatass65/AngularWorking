import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { UpperService } from './Services/upper.service';
import { LowerService } from './Services/lower.service';
import { backend_url } from './Services/Values';

let isProd :boolean= false;
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:UpperService ,useClass:isProd ? UpperService : LowerService},
  {provide:backend_url, useValue:"www.Berna.Com"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
