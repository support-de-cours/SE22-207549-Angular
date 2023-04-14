import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../book-interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public books: any[] = [];

  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    // console.log( this.bookService.books );
    this.bookService.books.subscribe( data => this.books = data )
  }

}
