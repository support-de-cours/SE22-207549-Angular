import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { PageYesComponent } from './pages/guarded-pages/page-yes/page-yes.component';
import { PageNoComponent } from './pages/guarded-pages/page-no/page-no.component';
import { PageMaybeComponent } from './pages/guarded-pages/page-maybe/page-maybe.component';
import { SayYesGuard } from './core/guards/say-yes.guard';
import { SayNoGuard } from './core/guards/say-no.guard';
import { SayMaybeGuard } from './core/guards/say-maybe.guard';


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


  // Route avec Gardes !
  {
    path: 'page-yes',
    component: PageYesComponent,
    canActivate: [
      SayYesGuard
    ]
  },
  {
    path: 'page-no',
    component: PageNoComponent,
    canActivate: [
      SayNoGuard
    ]
  },
  {
    path: 'page-maybe',
    component: PageMaybeComponent,
    canActivate: [
      SayMaybeGuard
    ]
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
