import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './event-card/event-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardListComponent } from './card-list/card-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NewEventComponent } from './new-event/new-event.component';
import { FormsModule } from '@angular/forms';
import { NewEventDialogComponent } from './new-event/new-event-dialog/new-event-dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    CardListComponent,
    OrderDialogComponent,
    NewEventComponent,
    NewEventDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    TextFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule ,
    MatIconModule,
    MatChipsModule,
    HttpClientModule
 ],
 entryComponents:[
    NewEventDialogComponent,
    OrderDialogComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
