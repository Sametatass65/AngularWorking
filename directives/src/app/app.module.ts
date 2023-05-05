import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { CustomDirective } from './directives/custom.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgIfComponent,
    NgswitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    CustomDirective,
    CustomPipe,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
