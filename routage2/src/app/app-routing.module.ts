import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepge/homepage/homepage.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

const routes: Routes = [
  // Homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  // About
  {
    path: 'about',
    component: AboutComponent
  },

  // Contact
  {
    path: 'contact',
    component: ContactComponent
  },

  // Books - index
  // Books - create
  // Books - read
  // Books - update
  // Books - delete

  // Pizzas - index
  // Pizzas - create
  // Pizzas - read
  // Pizzas - update
  // Pizzas - delete

  // Default route
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },

  // 
  // Not Found - A modifier
  {
    path: '',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
