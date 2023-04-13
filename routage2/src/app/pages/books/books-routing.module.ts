import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

// site.com/books
// site.com/books/create
// site.com/books/42
// site.com/books/42/update
// site.com/books/42/delete

const routes: Routes = [

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
