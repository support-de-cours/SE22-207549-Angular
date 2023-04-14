import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../book-interface';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  private id?: number;
  public book?: BookInterface;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ){}
  
  ngOnInit(): void {

    // Recup l'identifiant du livre
    // > param ID de l'url
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Envois d'une requete pour recup la data du livre ID
    this.bookService.getBookFromDb( this.id );
    
    // Afficher les données du livre
    this.bookService.book.subscribe( data => this.book = data );
    
  }
}
