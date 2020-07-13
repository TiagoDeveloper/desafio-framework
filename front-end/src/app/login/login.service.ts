import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false;
  private token: string;
  logado = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(usuario: Usuario){
    this.http.post<any>("/api/login/authenticate", usuario).subscribe(token => {
      this.token = token.jwt;
      localStorage.setItem('token_desafio', JSON.stringify({jwt: token.jwt}));
      this.usuarioAutenticado = true;
      this.logado.emit(true);
      this.router.navigate(['/home']);

    });
  }

  logout() {
    this.logado.emit(false);
    this.usuarioAutenticado = false;
    localStorage.removeItem('token_desafio');
    this.router.navigate(['/login']);
  }

  isUsuarioAutenticado(): boolean{
    if(localStorage.getItem('token_desafio')){
      this.usuarioAutenticado = true;
      this.logado.emit(true);
    }
    return this.usuarioAutenticado;
  }
  
  getToken(){
    let token = JSON.parse(localStorage.getItem('token_desafio'));
    if(this.token)
      return this.token;
    else
      return token ? token.jwt : null;
  }

}
