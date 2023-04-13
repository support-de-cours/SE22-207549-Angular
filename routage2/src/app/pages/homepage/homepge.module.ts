import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepgeRoutingModule } from './homepge-routing.module';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepgeRoutingModule
  ]
})
export class HomepgeModule { }
