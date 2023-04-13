import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './pages/books/books.module';
import { DataTypeExempleComponent } from './data-type-exemple/data-type-exemple.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTypeExempleComponent,
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
