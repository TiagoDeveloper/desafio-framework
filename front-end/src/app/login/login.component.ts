import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('fechar') fechaModal: ElementRef;

  usuario: Usuario = new Usuario();
  newUsuario: Usuario = new Usuario();
  confirmarSenha: string;

  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.usuario);
  }

  cadastrarUsuario(form){
    if(form.valid){
      this.usuarioService.createNewUsuario(this.newUsuario).subscribe(usuarioCadastrado => {
        this.newUsuario = usuarioCadastrado;
        this.fechaModal.nativeElement.click();
      });
    }
  }

}
