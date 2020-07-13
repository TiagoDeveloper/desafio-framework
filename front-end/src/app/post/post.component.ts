import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: Array<any>;
  post: Post = new Post();

  teste: string = `
    <p>
        Meu nome é Tiago e meu github é o <a href="http://localhost:4200/post">post</a>
    </p>
  `;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    });
  }

  createNewPost(){
    this.postService.createNewPost(this.post).subscribe(post => {
      this.post = post;
      console.log(this.post)
    });
  }

}
