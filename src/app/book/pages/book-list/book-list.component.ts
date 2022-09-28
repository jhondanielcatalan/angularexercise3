import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:Book[]=[];
  constructor(private bookService:BookService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
  }
  editAction(book:Book)
  {
    
  }
  deleteAction(book:Book)
  {
    const index : number = this.books.indexOf(book);
    if(index!==-1)
    {
      this.books.splice(index,1);
      console.log(this.books);
    }
  }
}
