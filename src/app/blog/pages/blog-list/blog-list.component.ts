import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs:Blog[]=[];
  constructor(private blogService:BlogService) {
    this.blogs = this.blogService.getBlogs();
  }

  ngOnInit(): void {
  }

  
  editAction(blog:Blog)
  {
  }

  deleteAction(blog:Blog)
  {
    //for deleting
    // const index : number = this.blogs.indexOf(blog);
    // if(index!==-1)
    // {
    //   this.blogs.splice(index,1);
    //   console.log(this.blogs);
    // }
  }

}
