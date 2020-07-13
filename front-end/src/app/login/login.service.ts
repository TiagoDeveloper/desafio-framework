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
      this.usuarioAutenticado = true;
      this.logado.emit(true);
      this.router.navigate(['/home']);

    });

    // if(usuario.username === 'admin@framework.com.br'
    //   && usuario.password === 'root'){
    //     this.usuarioAutenticado = true;
    //     this.logado.emit(true);
    //     this.router.navigate(['/home']);
    //   }else{
    //     this.logado.emit(false);
    //     this.usuarioAutenticado = false;
    //   }
  }

  isUsuarioAutenticado(): boolean{
    return this.usuarioAutenticado;
  }
  
  getToken(){
    return this.token;
  }

}
