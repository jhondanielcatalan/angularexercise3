import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[] = [
    {
      id:1,
      name:"Good Omens",
      authors:["Neil Gaiman", "Terry Pratchett"],
      isbn: "9780575048003",
    },
    {
      id:2,
      name:"Heads You Lose",
      authors:["Lisa Lutz", "Lisa Lutz "],
      isbn: "9780399157400",
    },
    {
      id:3,
      name:"Between the Lines",
      authors:["Jodi Picoult", "Samantha van Leer"],
      isbn: "9781451635751",
    },
    {
      id:4,
      name:"One-punchMan",
      authors:["One"],
      isbn: "1421585642",
    }
  ];

  constructor() { }
  
  getBooks():Book[] {
    return this.books;
  }
  
}
