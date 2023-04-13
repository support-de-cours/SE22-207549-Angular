import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepge/homepage/homepage.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

import { IndexComponent } from './pages/books/index/index.component';
// import { IndexComponent as PizzaIndexComponent } from './pages/pizza/index/index.component';

import { CreateComponent } from './pages/books/create/create.component';
import { ReadComponent } from './pages/books/read/read.component';
import { UpdateComponent } from './pages/books/update/update.component';
import { DeleteComponent } from './pages/books/delete/delete.component';
// import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

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







  // Books - index      site.com/books
  {
    path: 'books',
    component: IndexComponent
  },

  // Books - create     site.com/books/create
  {
    path: 'books/create',
    component: CreateComponent
  },

  // Books - read       site.com/books/42
  {
    path: 'books/:id',
    component: ReadComponent
  },

  // Books - update     site.com/books/42/update
  {
    path: 'books/:id/update',
    component: UpdateComponent
  },

  // Books - delete     site.com/books/42/delete
  {
    path: 'books/:id/delete',
    component: DeleteComponent
  },






  {
    path: 'books',
    children: [

      {
        path: '', // site.com/books
        component: IndexComponent
      },

      {
        path: 'create', // site.com/books/create
        component: CreateComponent
      },

      {
        path: ':id',
        children: [

          {
            path: '',  // site.com/books/42
            component: ReadComponent
          },

          {
            path: 'update', // site.com/books/42/update
            component: UpdateComponent
          },

          {
            path: 'delete', // site.com/books/42/delete
            component: DeleteComponent
          }
        ]
      }

    ]
  },





  // Pizzas - index     site.com/pizzas
  // {
  //   path: 'pizzas',
  //   component: PizzaIndexComponent
  // },

  // Pizzas - create    site.com/pizzas/create
  // Pizzas - read      site.com/pizzas/42
  // Pizzas - update    site.com/pizzas/42/update
  // Pizzas - delete    site.com/pizzas/42/delete







  // Default route
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },

  // WildCrad Route
  // Not Found - A modifier
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
