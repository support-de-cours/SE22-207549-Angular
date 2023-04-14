import { Injectable } from '@angular/core';
import { BookInterface } from '../book-interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const url = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books = new BehaviorSubject<any>([{
    title: "My default book",
    price: 999.99
  }]);

  constructor(
    private httpClient: HttpClient
  ){}

  // Get books from database
  getBooksFromDb()
  {
    this.httpClient
      .get("books")
      .subscribe(response => {
        this._books.next( response );
      })
  }

  get books()
  {
    return this._books;
  }

}
