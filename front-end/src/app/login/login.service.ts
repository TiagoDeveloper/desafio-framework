import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false;
  private usuarioLogado: Usuario;

  private token: string;
  logado = new EventEmitter<boolean>();


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(usuario: Usuario, fn){
    return this.http.post<any>("/api/login/authenticate", usuario)
    // .pipe(
    //   tap(_ => console.log(`Logando o usuario ${usuario.nome}`)),
    //   catchError(this.handleError<any>('login')))
      .subscribe(retorno => {
        this.token = retorno.jwt;
        this.usuarioLogado = retorno.userAuthenticated;
        localStorage.setItem('token_desafio', JSON.stringify({jwt: retorno.jwt}));
        localStorage.setItem('USUARIO_LOGADO', JSON.stringify(retorno.userAuthenticated));
        this.usuarioAutenticado = true;
        this.logado.emit(true);
        this.router.navigate(['/home']);
    },error => {
      fn.callback(error.status)
    });
  }

  logout() {
    this.logado.emit(false);
    this.usuarioAutenticado = false;
    localStorage.removeItem('token_desafio');
    localStorage.removeItem('USUARIO_LOGADO');
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

  getUsuarioLogado() {
    return this.usuarioLogado;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
