import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post';
import { LoginService } from '../login/login.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild('fechar') fechaModal: ElementRef;
  posts: Array<any>;
  post: Post = new Post();
  newPost: Post;

  usuarioLogado: Usuario;

  teste: string = `
    <p>
        Meu nome é <strong>Tiago</strong> e meu github é o <a href="http://localhost:4200/post">post</a>
    </p>
  `;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getUsuarioLogado();
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  createNewPost(){
    this.postService.createNewPost(this.post).subscribe(post => {
      this.newPost = post;
      this.getAllPosts();
      this.post = new Post();
      this.fechaModal.nativeElement.click();
    });
  }

  deletePost(idPost){
    this.postService.deletePost(idPost).subscribe(() => {
      this.getAllPosts();
    });
  }

  getUsuarioLogado(){
    this.usuarioLogado = JSON.parse(localStorage.getItem('USUARIO_LOGADO'));
  }

}
