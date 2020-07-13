import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUsuarios(): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>("api/usuarios");
  }
  createNewUsuario(usuario): Observable<Usuario>{
    return this.http.post<Usuario>("api/usuarios", usuario);
  }
}
