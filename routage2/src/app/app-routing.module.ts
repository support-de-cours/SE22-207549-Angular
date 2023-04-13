import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';


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


  // Default route
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },

  // WildCrad Route
  // Not Found 
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
