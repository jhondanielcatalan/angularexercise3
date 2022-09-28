import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs:Blog[] = [
    {
      id:1,
      title:"Walastik kung pumitik",
      description:"Mga magnanakaw aba'y walastik kung pumitik",
      author:"Ricky Lo",
      comments: ["#RaffyTulfoInAction", "I-KMJS NA YAN"]
    },
    {
      id:2,
      title:"Bangkay natagpuang patay",
      description:"Bangkay na na lumubog di nakatiis lumutang",
      author:"Marie Tess",
      comments: ["legit 100%","stg frfr"]
    },
    {
      id:3,
      title:"Dubai building a moon-like hotel",
      description:"San ka punta to the moon skr skr broom broom",
      author:"Yoma Agul",
      comments:["San punta","to the moon"]
    }
  ];

  constructor() { }

  getBlogs():Blog[] {
    return this.blogs;
  }
}
