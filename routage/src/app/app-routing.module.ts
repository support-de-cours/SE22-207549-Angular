import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  // Homepage
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  // Contact
  {
    path: 'contact',
    component: ContactComponent
  },

  // About
  {
    path: 'about',
    component: AboutComponent
  },

  // Default Route
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
