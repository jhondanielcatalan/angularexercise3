import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutputFileType } from 'typescript';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book:Book|undefined;
  @Input() id:number | undefined;
  @Output() editEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  editItem()
  {
     this.editEmitter.emit(this.book?.id);
    console.log(this.book?.id)
  }
  deleteItem()
  {
    this.deleteEmitter.emit();
    console.log(this.book?.id)
  }

}
