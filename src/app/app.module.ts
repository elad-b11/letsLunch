import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './event-card/event-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
