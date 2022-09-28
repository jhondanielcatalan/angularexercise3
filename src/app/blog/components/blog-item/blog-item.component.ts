import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog:Blog|undefined;
  @Input() id:number | undefined;
  @Output() editEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editItem()
  {
     this.editEmitter.emit(this.blog?.id);
    console.log(this.blog?.id)
  }
  deleteItem()
  {
    this.deleteEmitter.emit();
    console.log(this.blog?.id)
  }


}
