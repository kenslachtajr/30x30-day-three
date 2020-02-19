import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@fruits/material';
import { CoreDataModule } from '@fruits/core-data';
import { RoutingModule } from './routing.module';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsListComponent } from './fruits/fruits-list/fruits-list.component';
import { FruitsDetailsComponent } from './fruits/fruits-details/fruits-details.component';
import { FormsModule } from '@angular/forms';
import { UiLoginModule } from '@fruits/ui-login';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    UiLoginModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitsListComponent,
    FruitsDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
