import { Injectable } from '@angular/core';
import { BookInterface } from '../book-interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const url = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books = new BehaviorSubject<any>([]);
  private _book = new BehaviorSubject<any>({});

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

  getBookFromDb(id:number)
  {
    // Reset _book
    this._book.next({});

    // Get a book data
    this.httpClient
      .get(`books/${id}`)
      .subscribe(response => {
        this._book.next( response );
      })
  }

  get books()
  {
    return this._books;
  }
  get book()
  {
    return this._book;
  }

}
