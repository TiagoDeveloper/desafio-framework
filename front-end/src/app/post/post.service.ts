import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<Post>>{
    return this.http.get<Array<Post>>("api/posts");
  }

  createNewPost(post): Observable<Post>{
    return this.http.post<Post>("api/posts", post);
  }

  deletePost(idPost) {
    return this.http.delete(`api/posts/${idPost}`);
  }

}
