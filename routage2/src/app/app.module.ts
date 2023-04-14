import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './pages/books/books.module';
import { DataTypeExempleComponent } from './data-type-exemple/data-type-exemple.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiEndpointInterceptor } from './core/interceptors/api-endpoint.interceptor';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiEndpointInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
